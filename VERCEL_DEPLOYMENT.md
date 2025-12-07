# Configuração de Deployment na Vercel

## Como desabilitar a proteção de login em produção

A proteção de deployment (que exige login) é uma configuração do dashboard da Vercel e não pode ser controlada pelo arquivo `vercel.json`.

### Passos para desabilitar:

1. **Acesse o Dashboard da Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login na sua conta

2. **Navegue até o projeto**
   - Selecione o projeto `new-components-lib`

3. **Acesse as configurações**
   - Clique em **Settings** (Configurações)
   - Vá para a aba **General**

4. **Desabilite a proteção de deployment**
   - Procure por **"Deployment Protection"** ou **"Password Protection"**
   - Se estiver ativado, desative para o ambiente de **Production**
   - Salve as alterações

### Alternativa: Configuração por ambiente

Se você quiser manter a proteção apenas em preview deployments:

1. Em **Settings → General → Preview Deployments**
2. Configure para proteger apenas previews
3. Mantenha a produção pública

### Verificação

Após desabilitar, faça um novo deployment ou aguarde alguns minutos para que as alterações sejam aplicadas. O ambiente de produção deve ficar acessível sem necessidade de login.

