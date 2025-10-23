<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-light mb-6">Política de Privacidade</h1>
            <p class="text-muted-foreground font-light mb-8">
              Última atualização: {{ new Date().toLocaleDateString('pt-BR') }}
            </p>

            <div class="space-y-8 text-muted-foreground font-light leading-relaxed">
              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">1. Introdução</h2>
                <p>
                  A Enprodes respeita a privacidade de seus usuários e está comprometida em proteger as informações pessoais que você compartilha conosco. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">2. Informações que Coletamos</h2>
                <p class="mb-4">Podemos coletar as seguintes informações:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Nome e informações de contato (endereço de e-mail, telefone)</li>
                  <li>Informações fornecidas através de formulários de contato</li>
                  <li>Dados de navegação e uso do website</li>
                  <li>Informações sobre sua empresa e área de atuação</li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">3. Como Usamos suas Informações</h2>
                <p class="mb-4">Utilizamos as informações coletadas para:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Responder às suas solicitações e consultas</li>
                  <li>Fornecer informações sobre nossos serviços</li>
                  <li>Melhorar nosso website e serviços</li>
                  <li>Enviar comunicações relacionadas aos nossos serviços (com seu consentimento)</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">4. Compartilhamento de Informações</h2>
                <p>
                  Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem o seu consentimento, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">5. Cookies</h2>
                <p>
                  Nosso website pode usar cookies para melhorar a experiência do usuário. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">6. Segurança</h2>
                <p>
                  Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">7. Seus Direitos</h2>
                <p class="mb-4">Você tem o direito de:</p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Acessar suas informações pessoais</li>
                  <li>Solicitar correção de dados incorretos</li>
                  <li>Solicitar exclusão de suas informações</li>
                  <li>Opor-se ao processamento de suas informações</li>
                  <li>Solicitar a portabilidade de seus dados</li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">8. Alterações nesta Política</h2>
                <p>
                  Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página com a data de atualização.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-light text-foreground mb-4">9. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco através da nossa <NuxtLink to="/contato" class="text-enprodes-orange hover:underline">página de contato</NuxtLink>.
                </p>
              </div>
            </div>

            <div class="mt-12 pt-8 border-t">
              <NuxtLink to="/" class="inline-flex items-center text-enprodes-orange hover:text-enprodes-orange-dark font-light">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Voltar para página inicial
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Política de Privacidade - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Política de Privacidade da Enprodes. Saiba como coletamos, usamos e protegemos suas informações pessoais.'
    }
  ]
})
</script>
