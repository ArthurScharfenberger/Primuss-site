// src/components/ContactForm.tsx
"use client";

import type { ReactNode, ChangeEvent } from "react";

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

function formatCnpj(value: string) {
  const digits = onlyDigits(value).slice(0, 14);

  if (digits.length <= 2) return digits;
  if (digits.length <= 5)
    return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8)
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  if (digits.length <= 12)
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(
      5,
      8
    )}/${digits.slice(8)}`;

  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(
    5,
    8
  )}/${digits.slice(8, 12)}-${digits.slice(12, 14)}`;
}

function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
  e.currentTarget.value = formatPhone(e.currentTarget.value);
}

function handleCnpjChange(e: ChangeEvent<HTMLInputElement>) {
  e.currentTarget.value = formatCnpj(e.currentTarget.value);
}

function FieldGroup({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-xs text-slate-200">
      <span className="mb-1 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
        {label}
        {required && <span className="text-yellow-300">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  return (
    <form className="space-y-6" method="post" autoComplete="on">
      {/* Assunto / Origem */}
      <div className="grid gap-4 sm:grid-cols-2">
        <FieldGroup label="Assunto" required>
          <select
            name="assunto"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="projeto-usinagem">
              Projeto de usinagem / orçamento
            </option>
            <option value="duvidas-tecnicas">
              Dúvidas técnicas / engenharia
            </option>
            <option value="qualidade">
              Qualidade / certificados / PPAP
            </option>
            <option value="fornecedor">Fornecedor / compras</option>
            <option value="carreiras">Carreiras / RH</option>
            <option value="outros">Outros assuntos institucionais</option>
          </select>
        </FieldGroup>

        <FieldGroup label="Como conheceu a Primuss?">
          <select
            name="origem"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione (opcional)
            </option>
            <option value="indicacao">Indicação</option>
            <option value="feira-evento">Feira / evento</option>
            <option value="busca-online">Busca on-line</option>
            <option value="rede-social">Redes sociais</option>
            <option value="outros">Outros</option>
          </select>
        </FieldGroup>
      </div>

      {/* Dados pessoais / empresa */}
      <div className="grid gap-4 sm:grid-cols-2">
        <FieldGroup label="Nome completo" required>
          <input
            type="text"
            name="nome"
            autoComplete="name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            placeholder="Informe seu nome completo"
            required
          />
        </FieldGroup>

        <FieldGroup label="Empresa" required>
          <input
            type="text"
            name="empresa"
            autoComplete="organization"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            placeholder="Razão social ou nome da empresa"
            required
          />
        </FieldGroup>

        {/* CNPJ em linha inteira */}
        <div className="sm:col-span-2">
          <FieldGroup label="CNPJ da empresa" required>
            <input
              type="text"
              name="cnpj"
              autoComplete="on"
              inputMode="numeric"
              pattern="^\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}$"
              title="Informe um CNPJ válido no formato 00.000.000/0000-00"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
              placeholder="00.000.000/0000-00"
              onChange={handleCnpjChange}
              required
            />
          </FieldGroup>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FieldGroup label="E-mail" required>
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            placeholder="seuemail@empresa.com"
            required
          />
        </FieldGroup>

        <FieldGroup label="Telefone / WhatsApp" required>
          <input
            type="tel"
            name="telefone"
            autoComplete="tel"
            inputMode="tel"
            pattern="^\(\d{2}\)\s\d{4,5}-\d{4}$"
            title="Utilize o formato (00) 00000-0000"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            placeholder="(00) 00000-0000"
            onChange={handlePhoneChange}
            required
          />
        </FieldGroup>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <FieldGroup label="Cidade" required>
          <input
            type="text"
            name="cidade"
            autoComplete="address-level2"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            placeholder="Cidade"
            required
          />
        </FieldGroup>

        <FieldGroup label="Estado (UF)" required>
          <input
            type="text"
            name="uf"
            maxLength={2}
            autoComplete="address-level1"
            pattern="^[A-Za-z]{2}$"
            title="Informe a sigla do estado. Ex.: RS, SP, PR."
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm uppercase text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            placeholder="UF"
            required
          />
        </FieldGroup>

        <FieldGroup label="País">
          <input
            type="text"
            name="pais"
            autoComplete="country-name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
            placeholder="Brasil"
          />
        </FieldGroup>
      </div>

      {/* Mensagem */}
      <FieldGroup label="Mensagem" required>
        <textarea
          name="mensagem"
          rows={6}
          className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-yellow-400 focus:bg-slate-950 focus:ring-1 focus:ring-yellow-400/80"
          placeholder="Apresente de forma objetiva o contexto do projeto, principais requisitos, volumes estimados e prazos desejados."
          required
        />
      </FieldGroup>

      {/* Anexar arquivo – linha própria */}
      <FieldGroup label="Anexar desenho técnico / arquivo (opcional)">
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 px-4 py-4 text-[11px] text-slate-400">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
            Anexos do projeto
          </p>
          <p className="mt-1">
            Se disponível, anexe desenho técnico, especificações ou documentos
            complementares. Isso facilita a avaliação técnica do componente.
          </p>
          <div className="mt-3">
            <input
              type="file"
              name="arquivo"
              className="block w-full cursor-pointer text-[11px] text-slate-200 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-slate-800 file:px-4 file:py-2 file:text-[11px] file:font-medium file:text-slate-50 file:transition hover:file:bg-slate-700"
              accept=".pdf,.dxf,.dwg,.step,.stp,.igs,.iges,.zip,.rar"
            />
          </div>
          <p className="mt-2">
            Formatos comuns: PDF, DXF, DWG, STEP, entre outros. Limites de
            tamanho e processamento do arquivo podem variar conforme a solução
            adotada para o formulário.
          </p>
        </div>
      </FieldGroup>

      {/* Aceite / botão */}
      <div className="space-y-3 text-xs text-slate-400">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="aceite"
            required
            className="mt-[2px] h-4 w-4 rounded border-slate-600 bg-slate-950/60 text-yellow-400 outline-none focus:ring-1 focus:ring-yellow-400"
          />
          <span>
            Declaro que as informações preenchidas são verdadeiras e autorizo a
            Primuss a utilizá-las para fins de contato relacionado ao assunto
            informado neste formulário.
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-md transition hover:border-yellow-300 hover:bg-yellow-300"
        >
          Enviar mensagem
        </button>

        <p className="text-[11px] text-slate-500">
          Este formulário pode ser integrado a uma API, ferramenta de CRM ou
          solução de formulários corporativos utilizada pela Primuss.
        </p>
      </div>
    </form>
  );
}
