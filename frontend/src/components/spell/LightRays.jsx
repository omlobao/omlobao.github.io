import React, { useRef, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

const RAY_Y_POSITION_1 = -0.35;
const RAY_Y_POSITION_2 = -0.45;

function colorToRGB(hex) {
  let r = 1, g = 1, b = 1;
  if (!hex) return [r, g, b];
  if (hex.startsWith('rgba(')) {
    const parts = hex.slice(5, -1).split(',');
    r = parseInt(parts[0], 10) / 255;
    g = parseInt(parts[1], 10) / 255;
    b = parseInt(parts[2], 10) / 255;
  } else if (hex.startsWith('rgb(')) {
    const parts = hex.slice(4, -1).split(',');
    r = parseInt(parts[0], 10) / 255;
    g = parseInt(parts[1], 10) / 255;
    b = parseInt(parts[2], 10) / 255;
  } else if (hex.startsWith('#')) {
    const c = hex.slice(1);
    if (c.length === 3) {
      r = parseInt(c[0] + c[0], 16) / 255;
      g = parseInt(c[1] + c[1], 16) / 255;
      b = parseInt(c[2] + c[2], 16) / 255;
    } else if (c.length >= 6) {
      r = parseInt(c.slice(0, 2), 16) / 255;
      g = parseInt(c.slice(2, 4), 16) / 255;
      b = parseInt(c.slice(4, 6), 16) / 255;
    }
  }
  return [r, g, b];
}

function mapRange(value, fromLow, fromHigh, toLow, toHigh) {
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

const VERTEX_SHADER = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = `
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec4 u_colors[2];
uniform float u_intensity;
uniform float u_rays;
uniform float u_reach;
uniform vec2 u_rayPos1;
uniform vec2 u_rayPos2;

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
    float diagonal = length(u_resolution);

    return clamp(
        (.45 + 0.15 * sin(cosAngle * seedA + u_time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + u_time * speed)),
        u_reach, 1.0) *
        clamp((diagonal - length(sourceToCoord)) / diagonal, u_reach, 1.0);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;
    vec2 coord = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);
    float speed = u_rays * 10.0;

    vec2 rayPos1 = u_rayPos1;
    vec2 rayRefDir1 = normalize(vec2(1.0, -0.116));
    float raySeedA1 = 36.2214 * speed;
    float raySeedB1 = 21.11349 * speed;
    float raySpeed1 = 1.5 * speed;

    vec2 rayPos2 = u_rayPos2;
    vec2 rayRefDir2 = normalize(vec2(1.0, 0.241));
    float raySeedA2 = 22.39910 * speed;
    float raySeedB2 = 18.0234 * speed;
    float raySpeed2 = 1.1 * speed;

    float strength1 = rayStrength(rayPos1, rayRefDir1, coord, raySeedA1, raySeedB1, raySpeed1);
    float strength2 = rayStrength(rayPos2, rayRefDir2, coord, raySeedA2, raySeedB2, raySpeed2);

    float brightness = 1.0 * u_reach - (coord.y / u_resolution.y);
    float attenuation = clamp(brightness + (0.5 + u_intensity), 0.0, 1.0);

    float alpha1 = strength1 * attenuation * u_colors[0].a;
    float alpha2 = strength2 * attenuation * u_colors[1].a;

    vec3 premultColor1 = u_colors[0].rgb * alpha1;
    vec3 premultColor2 = u_colors[1].rgb * alpha2;

    vec3 blendedColor = premultColor1 + premultColor2;
    float blendedAlpha = alpha1 + alpha2 * (1.0 - alpha1);

    vec3 finalRGB = blendedColor / max(blendedAlpha, 0.0001);

    gl_FragColor = vec4(finalRGB * blendedAlpha, blendedAlpha);
}
`;

export default function LightRays({
  intensity = 16,
  rays = 28,
  reach = 22,
  position = 50,
  backgroundColor = "transparent",
  animation = { animate: true, speed: 5 },
  raysColor = {
    color1: "#38BDF8", // Luminous celestial cyan
    color2: "#818CF8", // Nebula indigo violet
  },
  style = {},
  className = "",
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const frameIdRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const [color1RGB, color2RGB] = useMemo(() => {
    const c1 = raysColor.color1 || "#38BDF8";
    const c2 = raysColor.color2 || "#818CF8";
    return [colorToRGB(c1), colorToRGB(c2)];
  }, [raysColor]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isMounted) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        preserveDrawingBuffer: false,
        premultipliedAlpha: true,
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
    } catch {
      return; // WebGL not supported, fallback gracefully
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.PlaneGeometry(1024, 1024);
    const material = new THREE.ShaderMaterial({
      fragmentShader: FRAGMENT_SHADER,
      vertexShader: VERTEX_SHADER,
      uniforms: {
        u_colors: {
          value: [
            new THREE.Vector4(color1RGB[0], color1RGB[1], color1RGB[2], 0.85),
            new THREE.Vector4(color2RGB[0], color2RGB[1], color2RGB[2], 0.85),
          ],
        },
        u_intensity: { value: mapRange(intensity, 0, 100, 0, 0.5) },
        u_rays: { value: mapRange(rays, 0, 100, 0, 0.3) },
        u_reach: { value: mapRange(reach, 0, 100, 0, 0.5) },
        u_time: { value: Math.random() * 1000 },
        u_mouse: { value: [0, 0] },
        u_resolution: { value: [width, height] },
        u_rayPos1: {
          value: [(position / 100) * width, RAY_Y_POSITION_1 * height],
        },
        u_rayPos2: {
          value: [(position / 100 + 0.02) * width, RAY_Y_POSITION_2 * height],
        },
      },
      wireframe: false,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    let lastTime = performance.now();
    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (animation.animate && mesh.material && mesh.material.uniforms) {
        mesh.material.uniforms.u_time.value += delta * (animation.speed || 5) * 0.12;
      }

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    frameIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container || !renderer) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (mesh.material?.uniforms) {
        mesh.material.uniforms.u_resolution.value = [width, height];
        mesh.material.uniforms.u_rayPos1.value = [
          (position / 100) * width,
          RAY_Y_POSITION_1 * height,
        ];
        mesh.material.uniforms.u_rayPos2.value = [
          (position / 100 + 0.02) * width,
          RAY_Y_POSITION_2 * height,
        ];
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      geometry.dispose();
      material.dispose();
    };
  }, [isMounted, intensity, rays, reach, position, color1RGB, color2RGB, animation.animate, animation.speed]);

  return (
    <div
      ref={containerRef}
      className={`spell-light-rays ${className}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
