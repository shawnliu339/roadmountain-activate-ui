<template>
  <div style="margin-bottom: 20px;">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Roadmountain</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/">{{ $t("nav.title") }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown :text="$t('nav.language')" right>
            <b-dropdown-item
              v-for="option in options"
              :key="option.value"
              @click="changeLanguage(option.value)"
            >
              {{ option.text }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
      return {
          options: [
              {
                  value: 'ja',
                  text: '日本語'
              },
              {
                  value: 'en',
                  text: 'English'
              }
          ],
          selected: 'jp'
      }
  },
  methods: {
      changeLanguage(selected) {
          this.$i18n.locale = selected
      }
  }
}
</script>