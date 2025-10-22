<template>
  <footer class="bg-enprodes-gray-dark text-white">
    <div class="container mx-auto px-6 py-16">
      <div class="grid md:grid-cols-4 gap-12">
        <div class="space-y-4">
          <img
            src="/enprodes.webp"
            alt="Enprodes"
            class="h-10 w-auto brightness-0 invert"
          />
          <p class="text-white/70 font-light leading-relaxed">
            Consultoria especializada em segurança operacional e planejamento de emergência.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-light mb-4">Navegação</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/" class="text-white/70 hover:text-white font-light transition-colors">
                Início
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sobre" class="text-white/70 hover:text-white font-light transition-colors">
                Sobre
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicos" class="text-white/70 hover:text-white font-light transition-colors">
                Serviços
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/clientes" class="text-white/70 hover:text-white font-light transition-colors">
                Clientes
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contato" class="text-white/70 hover:text-white font-light transition-colors">
                Contato
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-light mb-4">Serviços</h3>
          <ul class="space-y-3">
            <li class="text-white/70 font-light">Mobilidade</li>
            <li class="text-white/70 font-light">Smart Cities</li>
            <li class="text-white/70 font-light">Indústrias</li>
            <li class="text-white/70 font-light">Projetos de Engenharia</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-light mb-4">Escritórios</h3>
          <ul class="space-y-3">
            <li class="text-white/70 font-light">Rio de Janeiro, Brasil</li>
            <li class="text-white/70 font-light">São José dos Campos, Brasil</li>
            <li class="text-white/70 font-light">Rotterdam, Holanda</li>
            <li class="text-white/70 font-light">Bogotá, Colômbia</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-light">
          <p>© {{ new Date().getFullYear() }} Enprodes. Todos os direitos reservados.</p>
          <p>enprodes.com.br</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
