<template>
  <div class="container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <!-- Styled -->
      <b-form-file
        ref="file-input"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: null,
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        var formData = new FormData()
        formData.append('orderCsv', this.file)
        this.axios
          .post("/admin/orderids", formData)
          .then(res => {
            console.log("submit")
          })
          .catch(error => {
            console.log("error")
          })
      },
      onReset(evt) {
        evt.preventDefault()
        this.file = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
</style>