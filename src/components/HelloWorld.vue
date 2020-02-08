<template>
  <div class="container">
    <h1>Register SIM Card</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Vendor Code:" label-for="input-1" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-1"
          v-model="form.vendorCode"
          required
          placeholder="Enter vendor code"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-2" label="Suffix:" label-for="input-2" label-cols-sm="4" label-cols-lg="3">
        <b-form-select
          id="input-2"
          v-model="form.suffix"
          :options="suffixes"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="First Name:" label-for="input-3" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-3"
          v-model="form.firstName"
          required
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Middle Name (Optional):" label-for="input-4" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-4"
          v-model="form.middleName"
          required
          placeholder="Enter middle name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Last Name:" label-for="input-5" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-5"
          v-model="form.lastName"
          required
          placeholder="Enter last name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Sim No.:" label-for="input-6" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-6"
          v-model="form.simNo"
          required
          placeholder="Enter sim no."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Passport No.:" label-for="input-7" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-7"
          v-model="form.passportNo"
          required
          placeholder="Enter passport no."
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Passport Expiry:" label-for="input-8" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-8"
          v-model="form.passportExpiry"
          type="date"
          required
          placeholder="Enter passport expiry"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Passport Country:" label-for="input-9" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-9"
          v-model="form.passportCountry"
          required
          placeholder="Enter passport country"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-10" label="Address in Australia:" label-for="input-10" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-10"
          v-model="form.address"
          required
          placeholder="Enter address in Australia"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-11" label="Date of Birth:" label-for="input-11" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-11"
          v-model="form.dateOfBirth"
          type="date"
          required
          placeholder="Enter date of birth"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-12"
        label="Email address (Optional):"
        label-for="input-12"
        label-cols-sm="4" label-cols-lg="3"
      >
        <b-form-input
          id="input-12"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-13" label="Brand:" label-for="input-13" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-13"
          v-model="form.brand"
          required
          placeholder="Enter brand"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-14" label="Plan($):" label-for="input-14" label-cols-sm="4" label-cols-lg="3">
        <b-form-input
          id="input-14"
          v-model="form.plan"
          required
          placeholder="Enter plan"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          vendorCode: '',
          suffix: 'MR',
          firstName: '',
          middleName: '',
          lastName: '',
          simNo: '',
          passportNo: '',
          passportExpiry: '',
          passportCountry: '',
          address: '',
          dateOfBirth: '',
          email: '',
          brand: '',
          plan: ''
        },
        suffixes: ['MR', 'MRS', 'MISS'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        console.log("test")
        evt.preventDefault()
        this.axios.post("http://localhost:8080/registers", this.form).then(res => {
          console.log(res)
        })
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.vendorCode = ''
        this.form.suffix = 'MR'
        this.form.firstName = ''
        this.form.middleName = ''
        this.form.lastName = ''
        this.form.simNo = ''
        this.form.passportNo = ''
        this.form.passportExpiry = ''
        this.form.passportCountry = ''
        this.form.address = ''
        this.form.dateOfBirth = ''
        this.form.email = ''
        this.form.brand = ''
        this.form.plan = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>