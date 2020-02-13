<template>
  <div class="container">
    <h1>Register SIM Card</h1>
    <b-form ref="form" id="form" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-2"
        label="Suffix:"
        label-for="input-2"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-select
          id="input-2"
          v-model="$v.form.suffix.$model"
          :options="suffixes"
          :state="validateState('suffix')"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="First Name:"
        label-for="input-3"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-3"
          v-model="$v.form.firstName.$model"
          placeholder="Enter first name"
          :state="validateState('firstName')"
          aria-describedby="input-3-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-3-feedback">
          First name is a required field and only accpets alphabet.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Middle Name (Optional):"
        label-for="input-4"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-4"
          v-model="$v.form.middleName.$model"
          placeholder="Enter middle name"
          :state="validateState('middleName')"
          aria-describedby="input-4-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-4-feedback">
          Middle name only accepts alphabet.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Last Name:"
        label-for="input-5"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-5"
          v-model="$v.form.lastName.$model"
          placeholder="Enter last name"
          :state="validateState('lastName')"
          aria-describedby="input-5-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-4-feedback">
          Last name is a required field and only accpets alphabet.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        label="Sim No:"
        label-for="input-6"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-6"
          v-model="$v.form.simNo.$model"
          placeholder="Enter sim number."
          :state="validateState('simNo')"
          aria-describedby="input-6-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-4-feedback">
          SIM number is a required field and only accpets numerics.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-7"
        label="Passport No:"
        label-for="input-7"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-7"
          v-model="$v.form.passportNo.$model"
          placeholder="Enter passport number."
          :state="validateState('passportNo')"
          aria-describedby="input-7-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-7-feedback">
          Passport number is a required field and only accepts alphanumerics.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-8"
        label="Passport Expiry:"
        label-for="input-8"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-8"
          v-model="$v.form.passportExpiry.$model"
          type="date"
          placeholder="Enter passport expiry"
          :state="validateState('passportExpiry')"
          aria-describedby="input-8-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-8-feedback">
          Passport expiry is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-9"
        label="Passport Country:"
        label-for="input-9"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-select
          id="input-9"
          v-model="$v.form.passportCountry.$model"
          :state="validateState('passportCountry')"
          aria-describedby="input-9-feedback"
        >
          <b-form-select-option
            v-for="(country, key) in countries"
            :key="key"
            :value="key"
          >
            {{ country }}
          </b-form-select-option>
        </b-form-select>
        <b-form-invalid-feedback　id="input-9-feedback">
          Passport country is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-10"
        label="Address in Australia:"
        label-for="input-10"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-10"
          v-model="$v.form.address.$model"
          placeholder="Enter address in Australia"
          :state="validateState('address')"
          aria-describedby="input-10-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-10-feedback">
          Address is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-11"
        label="Date of Birth:"
        label-for="input-11"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-11"
          v-model="$v.form.dateOfBirth.$model"
          type="date"
          placeholder="Enter date of birth"
          :state="validateState('dateOfBirth')"
          aria-describedby="input-11-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-11-feedback">
          Date of birth is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-12"
        label="Email address:"
        label-for="input-12"
        label-cols-sm="4" label-cols-lg="3"
      >
        <b-form-input
          id="input-12"
          v-model="$v.form.email.$model"
          type="email"
          :state="validateState('email')"
          placeholder="Enter email"
          aria-describedby="input-12-feedback"
        ></b-form-input>
        <b-form-invalid-feedback　id="input-12-feedback">
          Email is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-13"
        label="Brand:"
        label-for="input-13"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-13"
          v-model="$v.form.brand.$model"
          placeholder="Enter brand"
          :state="validateState('brand')"
          aria-describedby="input-13-feedback"
          disabled
        ></b-form-input>
        <b-form-invalid-feedback　id="input-13-feedback">
          Brand is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-14"
        label="Plan($):"
        label-for="input-14"
        label-cols-sm="4"
        label-cols-lg="3"
      >
        <b-form-input
          id="input-14"
          v-model="$v.form.plan.$model"
          placeholder="Enter plan"
          :state="validateState('plan')"
          aria-describedby="input-13-feedback"
          disabled
        ></b-form-input>
        <b-form-invalid-feedback　id="input-14-feedback">
          Plan is a required field.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox v-model="form.accepted" :value="read" :unchecked-value="!read">
          Accept
          <a href="/static/private_policy.pdf" target="_blank"> Private Policy </a>
        </b-form-checkbox>
      </b-form-group>

      <b-button @click="showModal" variant="primary" v-bind:disabled="!form.accepted">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-modal ref="modal-1" title="Please check your infomation" @ok="onSubmit">
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
          plan: '40',
          accepted: false
        },
        suffixes: ['MR', 'MRS', 'MISS'],
        countries: null,
        show: true,
        read: true
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
          console.log(this.countries[0])
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
        this.$refs['modal-1'].show()
      },
      onSubmit(evt) {
        evt.preventDefault()
        this.axios.post("/registers", this.form).then(res => {
          console.log(res)
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
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
        this.form.accepted = false
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>