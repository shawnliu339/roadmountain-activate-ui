<template>
  <div class="container">
    <h1>Register SIM Card</h1>
    <b-form ref="form" id="form" @reset="onReset" v-if="show">
      <b-form-row class="form-group">
        <b-col sm="4" lg="3" class="text-sm-right">
          <b-icon-question-fill 
            variant="success"
            v-b-tooltip.hover
            title="Tooltip directive content"
          ></b-icon-question-fill>
          <label for="input-suffix" class="col-form-label">Suffix:</label>
        </b-col>
        <b-col>
          <b-form-select
            id="input-suffix"
            v-model="$v.form.suffix.$model"
            :options="suffixes"
            :state="validateState('suffix')"
          ></b-form-select>
        </b-col>
      </b-form-row>

      <b-form-group
        id="input-group-3"
        label="First Name:"
        label-for="input-firstname"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-firstname"
          v-model="$v.form.firstName.$model"
          placeholder="Enter first name"
          :state="validateState('firstName')"
          aria-describedby="input-firstname-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-firstname-feedback">
          First name is a required field and only accpets alphabet.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Middle Name (Optional):"
        label-for="input-middlename"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-middlename"
          v-model="$v.form.middleName.$model"
          placeholder="Enter middle name"
          :state="validateState('middleName')"
          aria-describedby="input-middlename-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-middlename-feedback">
          Middle name only accepts alphabet.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Last Name:"
        label-for="input-lastname"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-lastname"
          v-model="$v.form.lastName.$model"
          placeholder="Enter last name"
          :state="validateState('lastName')"
          aria-describedby="input-lastname-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-lastname-feedback">
          Last name is a required field and only accpets alphabet.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-row class="form-group">
        <b-col sm="4" lg="3" class="text-sm-right">
          <b-icon-question-fill 
            variant="success"
            v-b-tooltip.hover
            title="Tooltip directive content"
          ></b-icon-question-fill>
          <label for="input-sim-num" class="col-form-label">Sim No:</label>
        </b-col>
        <b-col>
          <b-form-input
          id="input-sim-num"
          v-model="$v.form.simNo.$model"
          placeholder="Enter sim number."
          :state="validateState('simNo')"
          aria-describedby="input-sim-num-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-sim-num-feedback">
          SIM number is a required field and only accpets numerics.
        </b-form-invalid-feedback>
        </b-col>
      </b-form-row>

      <b-form-group
        id="input-group-7"
        label="Passport No:"
        label-for="input-passport-num"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-passport-num"
          v-model="$v.form.passportNo.$model"
          placeholder="Enter passport number."
          :state="validateState('passportNo')"
          aria-describedby="input-passport-num-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-passport-num-feedback">
          Passport number is a required field and only accepts alphanumerics.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-8"
        label="Passport Expiry:"
        label-for="input-expiry"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-expiry"
          v-model="$v.form.passportExpiry.$model"
          type="date"
          placeholder="Enter passport expiry"
          :state="validateState('passportExpiry')"
          aria-describedby="input-expiry-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-expiry-feedback">
          Passport expiry is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-9"
        label="Passport Country:"
        label-for="input-country"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-select
          id="input-country"
          v-model="$v.form.passportCountry.$model"
          :state="validateState('passportCountry')"
          aria-describedby="input-country-feedback"
        >
          <b-form-select-option
            v-for="(country, key) in countries"
            :key="key"
            :value="key"
          >
            {{ country }}
          </b-form-select-option>
        </b-form-select>
        <b-form-invalid-feedback　id="input-country-feedback">
          Passport country is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-10"
        label="Address in Australia:"
        label-for="input-address"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-address"
          v-model="$v.form.address.$model"
          placeholder="Enter address in Australia"
          :state="validateState('address')"
          aria-describedby="input-address-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-address-feedback">
          Address is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-11"
        label="Date of Birth:"
        label-for="input-birthday"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-birthday"
          v-model="$v.form.dateOfBirth.$model"
          type="date"
          placeholder="Enter date of birth"
          :state="validateState('dateOfBirth')"
          aria-describedby="input-birthday-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-birthday-feedback">
          Date of birth is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-12"
        label="Email address:"
        label-for="input-email"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-email"
          v-model="$v.form.email.$model"
          type="email"
          :state="validateState('email')"
          placeholder="Enter email"
          aria-describedby="input-email-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-email-feedback">
          Email is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-13"
        label="Brand:"
        label-for="input-brand"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-brand"
          v-model="$v.form.brand.$model"
          placeholder="Enter brand"
          :state="validateState('brand')"
          aria-describedby="input-brand-feedback"
          disabled
        ></b-form-input>
        <b-form-invalid-feedback　id="input-brand-feedback">
          Brand is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-14"
        label="Plan($):"
        label-for="input-plan"
        label-cols-sm="4"
        label-cols-lg="3"
        label-align-sm="right"
      >
        <b-form-input
          id="input-plan"
          v-model="$v.form.plan.$model"
          placeholder="Enter plan"
          :state="validateState('plan')"
          aria-describedby="input-plan-feedback"
          disabled
        ></b-form-input>
        <b-form-invalid-feedback　id="input-plan-feedback">
          Plan is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox v-model="accepted" :value="read" :unchecked-value="!read">
          Accept
          <a href="/static/private_policy.pdf" target="_blank"> Private Policy </a>
        </b-form-checkbox>
      </b-form-group>

      <b-button @click="showModal" variant="primary" v-bind:disabled="!accepted">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-modal ref="modal-check" title="Please check your infomation" @ok="onSubmit">
      <p class="my-4">Suffix: {{form.suffix}}</p>
      <p class="my-4">First Name: {{form.firstName}}</p>
      <p class="my-4">Middle Name: {{form.middleName}}</p>
      <p class="my-4">Last Name: {{form.lastName}}</p>
      <p class="my-4">Sim No: {{form.simNo}}</p>
      <p class="my-4">Passport No: {{form.passportNo}}</p>
      <p class="my-4">Passport Expiry: {{form.passportExpiry}}</p>
      <p class="my-4">Passport Country: {{form.passportCountry}}</p>
      <p class="my-4">Address in Australia: {{form.address}}</p>
      <p class="my-4">Date of Birth: {{form.dateOfBirth}}</p>
      <p class="my-4">Email Address: {{form.email}}</p>
      <p class="my-4">Brand: {{form.brand}}</p>
      <p class="my-4">Plan($): {{form.plan}}</p>
      <p class="my-4">If all of the infomation is correct, please click ok to submit.</p>
    </b-modal>
  </div>
</template>

<script>
  import { required, alpha, email, numeric, alphaNum } from 'vuelidate/lib/validators'
  import { validationMixin } from 'vuelidate'

  export default {
    mixins: [validationMixin],
    data() {
      return {
        form: {
          suffix: 'MR',
          firstName: '',
          middleName: '',
          lastName: '',
          simNo: '',
          passportNo: '',
          passportExpiry: '',
          passportCountry: 'JP',
          address: '',
          dateOfBirth: '',
          email: '',
          brand: 'Optus',
          plan: '40'
        },
        suffixes: ['MR', 'MRS', 'MISS'],
        countries: null,
        show: true,
        read: true,
        accepted: false
      }
    },
    created() {
      this.getCountries()
    },
    validations: {
      form: {
        suffix: { required },
        firstName: { required, alpha },
        middleName: { alpha },
        lastName: { required, alpha },
        simNo: { required, numeric },
        passportNo: { required, alphaNum },
        passportExpiry: { required },
        passportCountry: { required },
        address: { required },
        dateOfBirth: { required },
        email: { email, required },
        brand: { required },
        plan: { required },
      }
    },
    methods: {
      getCountries() {
        this.axios.get("/countries").then(res =>{
          this.countries = res.data
        })
      },
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      },
      showModal() {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        this.$refs['modal-check'].show()
      },
      onSubmit(evt) {
        evt.preventDefault()
        this.axios.post("/registers", this.form)
        .then(res => {
          this.resetForm()
          this.$refs['modal-check'].hide()
        })
        .catch(error => {
          console.log(error)
        })
      },
      resetForm() {
        // Rest validation
        this.$v.form.$reset()
        // Reset our form values
        this.form.suffix = 'MR'
        this.form.firstName = ''
        this.form.middleName = ''
        this.form.lastName = ''
        this.form.simNo = ''
        this.form.passportNo = ''
        this.form.passportExpiry = ''
        this.form.passportCountry = 'JP'
        this.form.address = ''
        this.form.dateOfBirth = ''
        this.form.email = ''
        this.form.brand = 'Optus'
        this.form.plan = '40'
        this.accepted = false
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onReset(evt) {
        evt.preventDefault()
        this.resetForm()
      }
    }
  }
</script>