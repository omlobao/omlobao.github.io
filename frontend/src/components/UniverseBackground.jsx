import React, { useEffect, useRef } from 'react';

export default function UniverseBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    // Check accessibility preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Mouse / Cursor state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
      active: false
    };

    // Stardust trail from mouse
    const stardust = [];
    const maxStardust = 35;

    // Supernova click shockwaves
    const shockwaves = [];

    // Shooting stars (meteors)
    const meteors = [];
    let nextMeteorTime = performance.now() + 2500;

    // Star color palettes (realistic stellar classes)
    const starColors = [
      '#FFFFFF', // White
      '#F0F6FF', // Blue-white
      '#E0E7FF', // Indigo starlight
      '#FEF3C7', // Warm yellow-white
      '#FFEDD5', // Amber gold
      '#FF8A7A'  // Cosmic vermilion starlight
    ];

    // Star Class
    class Star {
      constructor(isDistant = false) {
        this.isDistant = isDistant;
        this.init(true);
      }

      init(randomInit = false) {
        this.x = randomInit ? Math.random() * width : (Math.random() < 0.5 ? -10 : width + 10);
        this.y = Math.random() * height;

        // Depth layer
        if (this.isDistant) {
          this.radius = Math.random() * 0.8 + 0.3;
          this.baseAlpha = Math.random() * 0.35 + 0.15;
          this.vx = (Math.random() - 0.5) * 0.08;
          this.vy = (Math.random() - 0.5) * 0.08;
          this.color = '#FFFFFF';
          // Twinkle properties - distant stars: very gentle, slow cosmic shimmer (~7-18s cycle)
          this.twinkleSpeed = Math.random() * 0.0006 + 0.0003;
          this.twinkleStrength = Math.random() * 0.12 + 0.05;
        } else {
          this.radius = Math.random() * 1.6 + 0.8;
          this.baseAlpha = Math.random() * 0.5 + 0.35;
          this.vx = (Math.random() - 0.5) * 0.22;
          this.vy = (Math.random() - 0.5) * 0.22;
          this.color = starColors[Math.floor(Math.random() * starColors.length)];
          // Twinkle properties - main stars: smooth, organic slow shimmer (~3.5-8s cycle)
          this.twinkleSpeed = Math.random() * 0.0012 + 0.0005;
          this.twinkleStrength = Math.random() * 0.18 + 0.08;
        }

        this.twinklePhase = Math.random() * Math.PI * 2;

        // Mass for gravity response
        this.originX = this.x;
        this.originY = this.y;
      }

      update(time) {
        // Natural cosmic drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // Gravitational attraction to cursor
        if (mouse.active && !this.isDistant) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 5) {
            const force = (1 - dist / mouse.radius) * 0.05;
            this.x += (dx / dist) * force * 12;
            this.y += (dy / dist) * force * 12;
          }
        }
      }

      draw(time) {
        // Twinkle calculation
        const twinkle = Math.sin(time * this.twinkleSpeed + this.twinklePhase) * this.twinkleStrength;
        const currentAlpha = Math.max(0.1, Math.min(1, this.baseAlpha + twinkle));

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // Bright foreground stars get soft cosmic halo
        if (this.radius > 1.8 && currentAlpha > 0.6) {
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 8;
        }

        ctx.fillStyle = this.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    // Shooting Star / Meteor Class
    class Meteor {
      constructor() {
        this.reset();
      }

      reset() {
        // Spawn from top or right corner
        this.x = Math.random() * (width * 0.8) + width * 0.1;
        this.y = Math.random() * (height * 0.4);
        this.length = Math.random() * 90 + 70;
        this.speed = Math.random() * 8 + 9;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3; // ~45 degrees diagonal
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.012;
        this.color = Math.random() > 0.3 ? '#FFFFFF' : '#FF7766';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        return this.alpha > 0;
      }

      draw() {
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.7, `rgba(255, 120, 100, ${this.alpha * 0.5})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${this.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Meteor Head Spark
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#FF4433';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Shockwave (Supernova click effect)
    class Shockwave {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 4;
        this.maxRadius = 140;
        this.alpha = 0.8;
      }

      update() {
        this.radius += 5.5;
        this.alpha = Math.max(0, 0.8 * (1 - this.radius / this.maxRadius));
        return this.radius < this.maxRadius;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 90, 70, ${this.alpha * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner soft stardust ring
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(167, 139, 250, ${this.alpha * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Stardust Sparkle from cursor
    class Stardust {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 16;
        this.y = y + (Math.random() - 0.5) * 16;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 1.4 + 0.5;
        this.alpha = 0.85;
        this.decay = Math.random() * 0.02 + 0.015;
        this.color = Math.random() > 0.4 ? '#FF7262' : '#C084FC';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        return this.alpha > 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    let distantStars = [];
    let mainStars = [];
    const maxLinkDistance = 110;

    const setupDimensions = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Adaptive star count for fluid 60FPS
      const area = width * height;
      const distantCount = Math.min(Math.floor(area / 9000), 120);
      const mainCount = Math.min(Math.floor(area / 18000), 55);

      distantStars = Array.from({ length: Math.max(distantCount, 50) }, () => new Star(true));
      mainStars = Array.from({ length: Math.max(mainCount, 25) }, () => new Star(false));
    };

    setupDimensions();

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Spawn subtle stardust trail
      if (stardust.length < maxStardust && Math.random() < 0.6) {
        stardust.push(new Stardust(e.clientX, e.clientY));
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;

        if (stardust.length < maxStardust && Math.random() < 0.5) {
          stardust.push(new Stardust(e.touches[0].clientX, e.touches[0].clientY));
        }
      }
    };

    const handleClick = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : width / 2);
      const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : height / 2);

      shockwaves.push(new Shockwave(clientX, clientY));

      // Burst of stardust on click
      for (let i = 0; i < 8; i++) {
        stardust.push(new Stardust(clientX, clientY));
      }

      // Gentle push impulse to nearby stars
      mainStars.forEach((star) => {
        const dx = star.x - clientX;
        const dy = star.y - clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 1) {
          star.x += (dx / dist) * 16;
          star.y += (dy / dist) * 16;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', setupDimensions);

    // Render loop
    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // 1. Deep Space Cosmic Nebulae Glow
      // Top-right subtle violet nebula
      const nebula1 = ctx.createRadialGradient(
        width * 0.85,
        height * 0.15,
        0,
        width * 0.85,
        height * 0.15,
        width * 0.45
      );
      nebula1.addColorStop(0, 'rgba(124, 58, 237, 0.055)');
      nebula1.addColorStop(0.5, 'rgba(79, 70, 229, 0.025)');
      nebula1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      // Bottom-left subtle cosmic vermilion/amber nebula
      const nebula2 = ctx.createRadialGradient(
        width * 0.15,
        height * 0.8,
        0,
        width * 0.15,
        height * 0.8,
        width * 0.4
      );
      nebula2.addColorStop(0, 'rgba(255, 68, 51, 0.04)');
      nebula2.addColorStop(0.5, 'rgba(245, 158, 11, 0.015)');
      nebula2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse coordinates (lerp)
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.14;
        mouse.y += (mouse.targetY - mouse.y) * 0.14;

        // Gravitational aura around cursor
        const gravityGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        gravityGlow.addColorStop(0, 'rgba(255, 68, 51, 0.06)');
        gravityGlow.addColorStop(0.4, 'rgba(167, 139, 250, 0.025)');
        gravityGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gravityGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Distant Background Stars
      for (let i = 0; i < distantStars.length; i++) {
        distantStars[i].update(time);
        distantStars[i].draw(time);
      }

      // 3. Draw Constellation lines between Main Stars
      for (let i = 0; i < mainStars.length; i++) {
        for (let j = i + 1; j < mainStars.length; j++) {
          const dx = mainStars[i].x - mainStars[j].x;
          const dy = mainStars[i].y - mainStars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDistance) {
            const alpha = (1 - dist / maxLinkDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(mainStars[i].x, mainStars[i].y);
            ctx.lineTo(mainStars[j].x, mainStars[j].y);
            ctx.strokeStyle = `rgba(200, 220, 255, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }

        // Connect main stars to mouse cursor when close
        if (mouse.active) {
          const dx = mainStars[i].x - mouse.x;
          const dy = mainStars[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(mainStars[i].x, mainStars[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 114, 98, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();

            // Star glows stronger near cursor
            ctx.beginPath();
            ctx.arc(mainStars[i].x, mainStars[i].y, mainStars[i].radius * 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 1.2})`;
            ctx.fill();
          }
        }
      }

      // 4. Draw Main Stars
      for (let i = 0; i < mainStars.length; i++) {
        mainStars[i].update(time);
        mainStars[i].draw(time);
      }

      // 5. Update & Draw Stardust
      for (let i = stardust.length - 1; i >= 0; i--) {
        if (!stardust[i].update()) {
          stardust.splice(i, 1);
        } else {
          stardust[i].draw();
        }
      }

      // 6. Update & Draw Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        if (!shockwaves[i].update()) {
          shockwaves.splice(i, 1);
        } else {
          shockwaves[i].draw();
        }
      }

      // 7. Shooting Stars / Meteors
      if (time > nextMeteorTime && meteors.length < 2) {
        meteors.push(new Meteor());
        nextMeteorTime = time + Math.random() * 5000 + 4000; // Next meteor in 4 to 9 seconds
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        if (!meteors[i].update()) {
          meteors.splice(i, 1);
        } else {
          meteors[i].draw();
        }
      }

      if (!document.hidden) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      // Just draw static frame for reduced motion preference
      render(0);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', setupDimensions);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="universe-background-canvas"
      aria-hidden="true"
    />
  );
}

