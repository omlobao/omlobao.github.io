import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Boxes,
  Sparkles,
  Split,
  Monitor,
  Smartphone,
  ShieldCheck,
  Calculator,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Zap,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function PillarSimulator({ pillarNumber }) {
  const { lang } = useLanguage();
  const isPt = lang === 'pt';

  // State for Pillar 06: Stock depletion
  const [stockOrders, setStockOrders] = useState(1);
  const [lastDeducted, setLastDeducted] = useState(null);

  // State for Pillar 07: Grok AI
  const [aiInsightIdx, setAiInsightIdx] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // State for Pillar 03: KDS live timers
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulateStock = (e) => {
    e.stopPropagation();
    const nextCount = stockOrders + 1;
    setStockOrders(nextCount);
    setLastDeducted(nextCount);
    setTimeout(() => setLastDeducted(null), 1800);
  };

  const handleNextAiInsight = (e) => {
    e.stopPropagation();
    setIsGenerating(true);
    setTimeout(() => {
      setAiInsightIdx((prev) => (prev + 1) % 3);
      setIsGenerating(false);
    }, 350);
  };

  // --- PILLAR 06: CONTROLE DE ESTOQUE E FICHAS TÉCNICAS ---
  if (pillarNumber === '06') {
    const farinhaUsada = (0.25 * stockOrders).toFixed(2);
    const mussarelaUsada = (0.18 * stockOrders).toFixed(2);
    const molhoUsado = (0.12 * stockOrders).toFixed(2);
    const manjericaoUsado = (0.01 * stockOrders).toFixed(2);

    const farinhaRestante = Math.max(0, 15.0 - farinhaUsada).toFixed(2);
    const mussarelaRestante = Math.max(0, 20.0 - mussarelaUsada).toFixed(2);
    const molhoRestante = Math.max(0, 10.0 - molhoUsado).toFixed(2);
    const manjericaoRestante = Math.max(0, 1.0 - manjericaoUsado).toFixed(2);

    const custoTotal = (14.8 * stockOrders).toFixed(2);
    const vendaTotal = (68.0 * stockOrders).toFixed(2);

    return (
      <div className="kc-sim-box" onClick={(e) => e.stopPropagation()}>
        <div className="kc-sim-header">
          <div className="kc-sim-title-group">
            <span className="kc-sim-live-dot" />
            <span className="kc-sim-title">
              {isPt
                ? 'Simulador Interativo: Baixa Atômica por Ficha Técnica'
                : 'Interactive Simulator: Atomic Recipe Depletion'}
            </span>
          </div>

          <button
            type="button"
            onClick={handleSimulateStock}
            className="kc-sim-action-btn"
          >
            <Play size={12} fill="currentColor" />
            <span>
              {isPt
                ? `+ Despachar Pedido #${140 + stockOrders} (Pizza Margherita)`
                : `+ Dispatch Order #${140 + stockOrders} (Margherita Pizza)`}
            </span>
          </button>
        </div>

        {lastDeducted && (
          <div className="kc-sim-flash-banner">
            <Zap size={13} color="#4ADE80" />
            <span>
              {isPt
                ? `Transação confirmada: -560g de insumos baixados no PostgreSQL para o Pedido #${140 + stockOrders}!`
                : `Transaction committed: -560g ingredients deducted in PostgreSQL for Order #${140 + stockOrders}!`}
            </span>
          </div>
        )}

        <div className="kc-sim-stock-grid">
          <div className="kc-sim-stock-item">
            <div className="kc-sim-stock-item-top">
              <span className="kc-sim-stock-name">{isPt ? 'Farinha Tipo 00' : 'Type 00 Flour'}</span>
              <span className="kc-sim-stock-deduct">-{farinhaUsada} kg</span>
            </div>
            <div className="kc-sim-progress-track">
              <div
                className="kc-sim-progress-fill"
                style={{ width: `${Math.max(15, (farinhaRestante / 15) * 100)}%` }}
              />
            </div>
            <div className="kc-sim-stock-status">
              <span>{isPt ? 'Estoque:' : 'Stock:'} <strong>{farinhaRestante} kg</strong> / 15.00 kg</span>
            </div>
          </div>

          <div className="kc-sim-stock-item">
            <div className="kc-sim-stock-item-top">
              <span className="kc-sim-stock-name">{isPt ? 'Mussarela Fior di Latte' : 'Mozzarella Cheese'}</span>
              <span className="kc-sim-stock-deduct">-{mussarelaUsada} kg</span>
            </div>
            <div className="kc-sim-progress-track">
              <div
                className="kc-sim-progress-fill"
                style={{ width: `${Math.max(15, (mussarelaRestante / 20) * 100)}%` }}
              />
            </div>
            <div className="kc-sim-stock-status">
              <span>{isPt ? 'Estoque:' : 'Stock:'} <strong>{mussarelaRestante} kg</strong> / 20.00 kg</span>
            </div>
          </div>

          <div className="kc-sim-stock-item">
            <div className="kc-sim-stock-item-top">
              <span className="kc-sim-stock-name">{isPt ? 'Molho San Marzano' : 'San Marzano Sauce'}</span>
              <span className="kc-sim-stock-deduct">-{molhoUsado} kg</span>
            </div>
            <div className="kc-sim-progress-track">
              <div
                className="kc-sim-progress-fill"
                style={{ width: `${Math.max(15, (molhoRestante / 10) * 100)}%` }}
              />
            </div>
            <div className="kc-sim-stock-status">
              <span>{isPt ? 'Estoque:' : 'Stock:'} <strong>{molhoRestante} kg</strong> / 10.00 kg</span>
            </div>
          </div>

          <div className="kc-sim-stock-item">
            <div className="kc-sim-stock-item-top">
              <span className="kc-sim-stock-name">{isPt ? 'Manjericão Fresco' : 'Fresh Basil'}</span>
              <span className="kc-sim-stock-deduct">-{manjericaoUsado} kg</span>
            </div>
            <div className="kc-sim-progress-track">
              <div
                className="kc-sim-progress-fill"
                style={{ width: `${Math.max(15, (manjericaoRestante / 1) * 100)}%` }}
              />
            </div>
            <div className="kc-sim-stock-status">
              <span>{isPt ? 'Estoque:' : 'Stock:'} <strong>{manjericaoRestante} kg</strong> / 1.00 kg</span>
            </div>
          </div>
        </div>

        <div className="kc-sim-metrics-strip">
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Custo Insumos' : 'Ingredient Cost'}</span>
            <span className="kc-sim-metric-val">R$ {custoTotal}</span>
          </div>
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Preço Venda' : 'Gross Sales'}</span>
            <span className="kc-sim-metric-val">R$ {vendaTotal}</span>
          </div>
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'CMV Real' : 'Real COGS'}</span>
            <span className="kc-sim-metric-val" style={{ color: '#4ADE80' }}>21.7% ({isPt ? 'Excelente' : 'Optimal'})</span>
          </div>
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Ruptura' : 'Stockout'}</span>
            <span className="kc-sim-metric-val" style={{ color: '#4ADE80' }}>0.0%</span>
          </div>
        </div>
      </div>
    );
  }

  // --- PILLAR 07: INTELIGÊNCIA ARTIFICIAL E GROK AI ---
  if (pillarNumber === '07') {
    const insightsPt = [
      {
        prompt: 'Grok, qual a projeção de compras e risco de ruptura para o pico desta sexta-feira?',
        response: 'Análise concluída com base em 1.480 comandas históricas e clima (28°C ensolarado): Aumento de 32% no chopp artesanal e 24% em pizzas. Recomendação: Antecipar pedido de compra de +10kg de queijo até quinta 15h para evitar ruptura no pico das 21h30.',
        accuracy: '96.4%',
        time: '280ms',
        saving: 'R$ 540,00'
      },
      {
        prompt: 'Grok, quais itens do cardápio apresentam margem de contribuição abaixo do ideal?',
        response: 'Identificada anomalia de CMV no "Hambúrguer Especial": Custo da carne subiu 8,5% no fornecedor, elevando o CMV para 34,2%. Sugestão: Ajustar preço de R$ 38 para R$ 41,50 ou renegociar o blend com o fornecedor.',
        accuracy: '98.1%',
        time: '310ms',
        saving: 'R$ 820/mês'
      },
      {
        prompt: 'Grok, qual a estimativa de giro de mesa e dimensionamento de garçons para o sábado?',
        response: 'Pico previsto entre 19h45 e 22h15 (taxa de ocupação de 94%). Recomendado escalar 4 garçons com o App SGR ativo para manter o giro médio de mesa em 48 minutos.',
        accuracy: '95.2%',
        time: '240ms',
        saving: 'Giro +18%'
      }
    ];

    const insightsEn = [
      {
        prompt: 'Grok, what is the demand forecast and stockout risk for this Friday peak?',
        response: 'Analysis generated from 1,480 historical tickets and weather data (28°C sunny): 32% increase in draft beer and 24% in artisanal pizzas. Recommendation: Issue purchase order for +10kg mozzarella by Thursday 3 PM to avoid dining room stockouts at 9:30 PM.',
        accuracy: '96.4%',
        time: '280ms',
        saving: '$120.00'
      },
      {
        prompt: 'Grok, which menu items currently exhibit suboptimal contribution margins?',
        response: 'COGS anomaly flagged in "Special Burger": Ground beef wholesale price increased by 8.5%, pushing COGS to 34.2%. Suggestion: Adjust retail price from $12.00 to $13.50 or renegotiate the blend with the purveyor.',
        accuracy: '98.1%',
        time: '310ms',
        saving: '$180/mo'
      },
      {
        prompt: 'Grok, what is the estimated table turnover rate and waitstaff staffing for Saturday?',
        response: 'Peak floor occupancy expected between 7:45 PM and 10:15 PM (94% capacity). Recommended waitstaff schedule: 4 floor servers with active SGR handheld apps to maintain table turnover at 48 minutes.',
        accuracy: '95.2%',
        time: '240ms',
        saving: '+18% Turnover'
      }
    ];

    const currentInsight = isPt ? insightsPt[aiInsightIdx] : insightsEn[aiInsightIdx];

    return (
      <div className="kc-sim-box" onClick={(e) => e.stopPropagation()}>
        <div className="kc-sim-header">
          <div className="kc-sim-title-group">
            <Sparkles size={14} color="#A78BFA" />
            <span className="kc-sim-title" style={{ color: '#E9D5FF' }}>
              {isPt ? 'Terminal de Inteligência Grok AI & Data Analysis' : 'Grok AI & Data Analysis Engine'}
            </span>
          </div>

          <button
            type="button"
            onClick={handleNextAiInsight}
            disabled={isGenerating}
            className="kc-sim-action-btn"
          >
            <RotateCcw size={12} className={isGenerating ? 'spin-icon' : ''} />
            <span>{isPt ? 'Gerar Outro Diagnóstico' : 'Generate Another Diagnosis'}</span>
          </button>
        </div>

        <div className="kc-sim-ai-terminal">
          <div className="kc-sim-ai-query">
            <span className="kc-sim-ai-prompt-sign">&gt;</span>
            <span>{currentInsight.prompt}</span>
          </div>

          <div className={`kc-sim-ai-response ${isGenerating ? 'loading' : ''}`}>
            <span className="kc-sim-ai-badge">Grok AI:</span>
            <p>{currentInsight.response}</p>
          </div>
        </div>

        <div className="kc-sim-metrics-strip">
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Acurácia Preditiva' : 'Predictive Accuracy'}</span>
            <span className="kc-sim-metric-val" style={{ color: '#A78BFA' }}>{currentInsight.accuracy}</span>
          </div>
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Latência Inferência' : 'Inference Latency'}</span>
            <span className="kc-sim-metric-val">{currentInsight.time}</span>
          </div>
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Impacto Financeiro' : 'Financial Impact'}</span>
            <span className="kc-sim-metric-val" style={{ color: '#4ADE80' }}>{currentInsight.saving}</span>
          </div>
        </div>
      </div>
    );
  }

  // --- PILLAR 02: SPLIT DE PAGAMENTO MULTI-CNPJ ---
  if (pillarNumber === '02') {
    return (
      <div className="kc-sim-box" onClick={(e) => e.stopPropagation()}>
        <div className="kc-sim-header">
          <div className="kc-sim-title-group">
            <Split size={14} color="var(--vermilion)" />
            <span className="kc-sim-title">
              {isPt ? 'Fluxo de Roteamento de Split Multi-CNPJ em Tempo Real' : 'Real-Time Multi-Company Payment Split Engine'}
            </span>
          </div>
          <span className="kc-tag kc-tag-vermilion" style={{ fontSize: '0.65rem' }}>
            {isPt ? '● Transação Segura' : '● Live Split API'}
          </span>
        </div>

        <div className="kc-sim-split-diagram">
          <div className="kc-sim-split-root">
            <span className="kc-sim-split-lbl">{isPt ? 'Pagamento Único do Cliente (Cartão / Pix)' : 'Single Guest Payment (Card / Pix)'}</span>
            <span className="kc-sim-split-val">R$ 180,00</span>
          </div>

          <div className="kc-sim-split-branches">
            <div className="kc-sim-split-card">
              <div className="kc-sim-split-dest">
                <span>🍹 {isPt ? 'Bar & Bebidas' : 'Bar & Beverages'}</span>
                <span className="kc-tag kc-tag-neutral" style={{ fontSize: '0.6rem' }}>CNPJ 01</span>
              </div>
              <div className="kc-sim-split-amount">R$ 68,00</div>
              <div className="kc-sim-split-meta">Stone API • PIS/COFINS 0% (Monofásico)</div>
            </div>

            <div className="kc-sim-split-card">
              <div className="kc-sim-split-dest">
                <span>🍕 {isPt ? 'Cozinha & Pizzas' : 'Kitchen & Pizzas'}</span>
                <span className="kc-tag kc-tag-neutral" style={{ fontSize: '0.6rem' }}>CNPJ 02</span>
              </div>
              <div className="kc-sim-split-amount">R$ 112,00</div>
              <div className="kc-sim-split-meta">PagBank API • Alíquota Simples Regular</div>
            </div>
          </div>
        </div>

        <div className="kc-sim-metrics-strip">
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Bitributação' : 'Double Taxation'}</span>
            <span className="kc-sim-metric-val" style={{ color: '#4ADE80' }}>0%</span>
          </div>
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Conciliação Bancária' : 'Bank Reconciliation'}</span>
            <span className="kc-sim-metric-val">100% {isPt ? 'Automática' : 'Automated'}</span>
          </div>
          <div className="kc-sim-metric">
            <span className="kc-sim-metric-lbl">{isPt ? 'Experiência do Cliente' : 'Guest Friction'}</span>
            <span className="kc-sim-metric-val">{isPt ? '1 Única Cobrança' : 'Single Swipe'}</span>
          </div>
        </div>
      </div>
    );
  }

  // --- PILLAR 03: REAL-TIME KDS ---
  if (pillarNumber === '03') {
    return (
      <div className="kc-sim-box" onClick={(e) => e.stopPropagation()}>
        <div className="kc-sim-header">
          <div className="kc-sim-title-group">
            <Monitor size={14} color="#60A5FA" />
            <span className="kc-sim-title">
              {isPt ? 'Interface Operacional KDS (Praças de Preparo)' : 'KDS Station Routing Live Display'}
            </span>
          </div>
          <span className="kc-tag kc-tag-neutral" style={{ color: '#60A5FA', fontSize: '0.65rem' }}>
            WebSocket Ping &lt; 15ms
          </span>
        </div>

        <div className="kc-sim-kds-tickets">
          <div className="kc-sim-kds-card">
            <div className="kc-sim-kds-top">
              <span className="kc-sim-kds-table">{isPt ? 'Mesa 04' : 'Table 04'}</span>
              <span className="kc-sim-kds-timer">08:{String((34 + secondsElapsed) % 60).padStart(2, '0')} min</span>
            </div>
            <div className="kc-sim-kds-dish">1x Risoto ao Funghi</div>
            <div className="kc-sim-kds-station" style={{ color: '#4ADE80' }}>
              ● {isPt ? 'Cozinha — Em Preparo' : 'Kitchen — Cooking'}
            </div>
          </div>

          <div className="kc-sim-kds-card urgent">
            <div className="kc-sim-kds-top">
              <span className="kc-sim-kds-table">{isPt ? 'Mesa 11' : 'Table 11'}</span>
              <span className="kc-sim-kds-timer" style={{ color: 'var(--vermilion)' }}>
                19:{String((12 + secondsElapsed) % 60).padStart(2, '0')} min
              </span>
            </div>
            <div className="kc-sim-kds-dish">2x Pizza Margherita</div>
            <div className="kc-sim-kds-station" style={{ color: 'var(--vermilion)' }}>
              ⚠ {isPt ? 'Forno — Alerta 20 min' : 'Pizza Oven — 20m Alert'}
            </div>
          </div>

          <div className="kc-sim-kds-card ready">
            <div className="kc-sim-kds-top">
              <span className="kc-sim-kds-table">{isPt ? 'Mesa 02' : 'Table 02'}</span>
              <span className="kc-sim-kds-timer">02:15 min</span>
            </div>
            <div className="kc-sim-kds-dish">2x Gin Tônica & 1x Chopp</div>
            <div className="kc-sim-kds-station" style={{ color: '#60A5FA' }}>
              ✓ {isPt ? 'Bar — Pronto / Despachar' : 'Bar — Ready to Serve'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- PILLAR 01: APP DO GARÇOM FLUTTER ---
  if (pillarNumber === '01') {
    return (
      <div className="kc-sim-box" onClick={(e) => e.stopPropagation()}>
        <div className="kc-sim-header">
          <div className="kc-sim-title-group">
            <Smartphone size={14} color="var(--vermilion)" />
            <span className="kc-sim-title">
              {isPt ? 'Mapa de Salão e Sincronização Mobile em Flutter' : 'Flutter Floor Map & Real-Time Sync'}
            </span>
          </div>
          <span className="kc-tag kc-tag-neutral" style={{ fontSize: '0.65rem' }}>
            Haptic Feedback ON
          </span>
        </div>

        <div className="kc-sim-floor-grid">
          <div className="kc-sim-table-cell occupied">
            <span className="kc-sim-tbl-num">Mesa 01</span>
            <span className="kc-sim-tbl-status">{isPt ? 'Ocupada' : 'Occupied'}</span>
            <span className="kc-sim-tbl-val">R$ 145,00</span>
          </div>
          <div className="kc-sim-table-cell free">
            <span className="kc-sim-tbl-num">Mesa 02</span>
            <span className="kc-sim-tbl-status">{isPt ? 'Livre' : 'Available'}</span>
            <span className="kc-sim-tbl-val">—</span>
          </div>
          <div className="kc-sim-table-cell bill">
            <span className="kc-sim-tbl-num">Mesa 03</span>
            <span className="kc-sim-tbl-status">{isPt ? 'Pedindo Conta' : 'Bill Requested'}</span>
            <span className="kc-sim-tbl-val">R$ 210,00</span>
          </div>
          <div className="kc-sim-table-cell sync">
            <span className="kc-sim-tbl-num">Mesa 04</span>
            <span className="kc-sim-tbl-status">{isPt ? 'Novo Pedido' : 'New Order'}</span>
            <span className="kc-sim-tbl-val">R$ 68,00</span>
          </div>
        </div>
      </div>
    );
  }

  // --- PILLAR 04: PDV & AUDITORIA ---
  if (pillarNumber === '04') {
    return (
      <div className="kc-sim-box" onClick={(e) => e.stopPropagation()}>
        <div className="kc-sim-header">
          <div className="kc-sim-title-group">
            <ShieldCheck size={14} color="#4ADE80" />
            <span className="kc-sim-title">
              {isPt ? 'Auditoria Financeira e Fechamento Cego de Caixa' : 'Blind Cash Register Audit Reconciliation'}
            </span>
          </div>
          <span className="kc-tag kc-tag-neutral" style={{ color: '#4ADE80', fontSize: '0.65rem' }}>
            Audit Trail OK
          </span>
        </div>

        <div className="kc-sim-audit-grid">
          <div className="kc-sim-audit-item">
            <span className="kc-sim-audit-lbl">{isPt ? 'Contagem Física (Operador)' : 'Physical Count (Cashier)'}</span>
            <span className="kc-sim-audit-val">R$ 1.840,00</span>
          </div>
          <div className="kc-sim-audit-item">
            <span className="kc-sim-audit-lbl">{isPt ? 'Registrado no Sistema ERP' : 'System Recorded Total'}</span>
            <span className="kc-sim-audit-val">R$ 1.840,00</span>
          </div>
          <div className="kc-sim-audit-item highlight">
            <span className="kc-sim-audit-lbl">{isPt ? 'Divergência de Caixa' : 'Register Discrepancy'}</span>
            <span className="kc-sim-audit-val" style={{ color: '#4ADE80' }}>R$ 0,00 (100% Batido)</span>
          </div>
        </div>
      </div>
    );
  }

  // --- PILLAR 05: INTELIGÊNCIA FISCAL ---
  if (pillarNumber === '05') {
    return (
      <div className="kc-sim-box" onClick={(e) => e.stopPropagation()}>
        <div className="kc-sim-header">
          <div className="kc-sim-title-group">
            <Calculator size={14} color="var(--vermilion)" />
            <span className="kc-sim-title">
              {isPt ? 'Segregação Automática de Monofásicos no Simples Nacional' : 'Single-Phase Beverage Tax Deduction Engine'}
            </span>
          </div>
          <span className="kc-tag kc-tag-neutral" style={{ fontSize: '0.65rem' }}>
            Simples Nacional
          </span>
        </div>

        <div className="kc-sim-audit-grid">
          <div className="kc-sim-audit-item">
            <span className="kc-sim-audit-lbl">{isPt ? 'Faturamento Bruto Mensal' : 'Monthly Gross Revenue'}</span>
            <span className="kc-sim-audit-val">R$ 85.000,00</span>
          </div>
          <div className="kc-sim-audit-item">
            <span className="kc-sim-audit-lbl">{isPt ? 'Bebidas Monofásicas (PIS/COFINS 0%)' : 'Single-Phase Products (0% PIS/COFINS)'}</span>
            <span className="kc-sim-audit-val" style={{ color: '#60A5FA' }}>R$ 28.500,00</span>
          </div>
          <div className="kc-sim-audit-item highlight">
            <span className="kc-sim-audit-lbl">{isPt ? 'Economia Tributária Gerada' : 'Direct Tax Savings'}</span>
            <span className="kc-sim-audit-val" style={{ color: '#4ADE80' }}>~R$ 1.995,00 / mês</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

