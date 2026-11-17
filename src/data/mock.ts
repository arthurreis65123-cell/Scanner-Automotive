export const overview = [
  { label: "Diagnósticos hoje", value: "12", delta: "+3 vs. ontem", tone: "green" },
  { label: "Veículos em análise", value: "04", delta: "2 aguardando leitura", tone: "neutral" },
  { label: "Falhas prioritárias", value: "03", delta: "Requerem atenção", tone: "amber" },
  { label: "Diagnósticos concluídos", value: "86", delta: "Neste mês", tone: "neutral" }
];
export const recentScans = [
  { vehicle: "Volkswagen Golf GTI", detail: "2019 · 2.0 TSI", code: "P0299", issue: "Pressão do turbo abaixo do esperado", status: "Atenção", time: "10:42" },
  { vehicle: "Toyota Corolla XEi", detail: "2021 · 2.0 Flex", code: "P0171", issue: "Mistura pobre — Banco 1", status: "Em análise", time: "09:58" },
  { vehicle: "BMW 320i", detail: "2018 · 2.0 Turbo", code: "Sem DTC", issue: "Inspeção eletrônica concluída", status: "Concluído", time: "09:21" },
  { vehicle: "Chevrolet Onix Plus", detail: "2022 · 1.0 Turbo", code: "P0302", issue: "Falha de combustão — Cilindro 2", status: "Crítico", time: "08:46" }
];
export const activity = [
  { title: "Leitura OBD-II iniciada", description: "Volkswagen Golf GTI · Sessão #AS-0248", time: "10:42" },
  { title: "Relatório gerado", description: "BMW 320i · Sessão #AS-0247", time: "09:24" },
  { title: "Veículo cadastrado", description: "Chevrolet Onix Plus · Cliente: Marcos A.", time: "08:39" }
];