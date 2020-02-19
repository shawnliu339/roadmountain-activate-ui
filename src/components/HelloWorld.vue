<template>
  <div class="container">
    <b-modal
      scrollable
      size="sm"
      ref="modal-check" 
      :title="$t('register.modalTitle')" 
      @ok="onSubmit"
    >
      <p>{{ $t("register.brand") }} : {{form.brand}}</p>
      <p>{{ $t("register.plan") }} : {{form.plan}}</p>
      <p>{{ $t("register.simNo") }} : {{form.simNo}}</p>

      <p>{{ $t("register.suffix") }} : {{form.suffix}}</p>
      <p>{{ $t("register.firstName") }} : {{form.firstName}}</p>
      <p>{{ $t("register.middleName") }} : {{form.middleName}}</p>
      <p>{{ $t("register.lastName") }} : {{form.lastName}}</p>
      <p>{{ $t("register.birthday") }} : {{form.dateOfBirth}}</p>

      <p>{{ $t("register.passportNo") }} : {{form.passportNo}}</p>
      <p>{{ $t("register.passportExpiry") }} : {{form.passportExpiry}}</p>
      <p>{{ $t("register.passportCountry") }} : {{countries[form.passportCountry]}}</p>

      <p>{{ $t("register.address") }} : {{form.address}}</p>
      <p>{{ $t("register.email") }} : {{form.email}}</p>
      
      <p v-html="$t('register.modalContent')"></p>
    </b-modal>

    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="/static/favicon.ico" alt="" width="72" height="72">
      <h2>{{ $t('register.title') }}</h2>
      <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div>
    

    <b-form ref="form" id="form" @reset="onReset" v-if="show">

      <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">{{ $t("register.brandAndPlan") }}</span>
            <span class="badge badge-secondary badge-pill">1</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Optus</h6>
              </div>
              <span class="text-success">$40</span>
            </li>
          </ul>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">{{ $t("register.simCardInfo") }}</h4>

          <div class="mb-3">
            <b-button id="tooltip-sim" pill variant="success"
              style="width: 17px; height: 17px; vertical-align: text-top; padding: 0px; font-size: 0.8em; font-weight: bold;"
            >?</b-button>
            <b-tooltip target="tooltip-sim" :title="$t('register.simNoTooltip')"></b-tooltip>
            <label for="input-sim-num">{{ $t('register.simNo') }}</label>
            <b-form-input
              id="input-sim-num"
              v-model="$v.form.simNo.$model"
              :placeholder="$t('register.simNoPlaceHolder')"
              :state="validateState('simNo')"
              aria-describedby="input-sim-num-feedback"
            ></b-form-input>
            <b-form-invalid-feedback　id="input-sim-num-feedback">
              {{ $t("register.simNoInvalidFeedback") }}
            </b-form-invalid-feedback>
          </div>
          <hr class="mb-4">

          <h4 class="mb-3">{{ $t("register.customerInfo") }}</h4>

          <div class="mb-3">
            <b-button id="tooltip-suffix" pill variant="success"
              style="width: 17px; height: 17px; vertical-align: text-top; padding: 0px; font-size: 0.8em; font-weight: bold;"
            >?</b-button>
            <b-tooltip target="tooltip-suffix" >
              <span v-html="$t('register.suffixTooltip')"></span>
            </b-tooltip>
            <label for="input-suffix">{{ $t("register.suffix") }}</label>
            <b-form-select
                id="input-suffix"
                v-model="$v.form.suffix.$model"
                :options="suffixes"
                :state="validateState('suffix')"
            ></b-form-select>
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="input-firstname">{{ $t("register.firstName") }}</label>
              <b-form-input
                id="input-firstname"
                v-model="$v.form.firstName.$model"
                :placeholder="$t('register.firstNamePlaceHolder')"
                :state="validateState('firstName')"
                aria-describedby="input-firstname-feedback"
              ></b-form-input>
              <b-form-invalid-feedback　id="input-firstname-feedback">
                {{ $t("register.firstNameInvalidFeedback") }}
              </b-form-invalid-feedback>
            </div>

            <div class="col-md-4 mb-3">
              <label for="input-middlename" style="font-size: 0.9rem">
                {{ $t("register.middleName") }}
                <small class="text-muted" style="font-size: 0.5rem">
                  ({{ $t("register.optional") }})
                </small>
              </label>
              <b-form-input
                id="input-middlename"
                v-model="$v.form.middleName.$model"
                :placeholder="$t('register.middleNamePlaceHolder')"
                :state="validateState('middleName')"
                aria-describedby="input-middlename-feedback"
              ></b-form-input>
              <b-form-invalid-feedback　id="input-middlename-feedback">
                {{ $t("register.middleNameInvalidFeedback") }}
              </b-form-invalid-feedback>
            </div>

            <div class="col-md-4 mb-3">
              <label for="input-lastname">{{ $t("register.lastName") }}</label>
              <b-form-input
                id="input-lastname"
                v-model="$v.form.lastName.$model"
                :placeholder="$t('register.lastNamePlaceHolder')"
                :state="validateState('lastName')"
                aria-describedby="input-lastname-feedback"
              ></b-form-input>
              <b-form-invalid-feedback　id="input-lastname-feedback">
                {{ $t("register.lastNameInvalidFeedback") }}
              </b-form-invalid-feedback>
            </div>
          </div>
  
          <div class="mb-3">
            <label for="input-birthday">{{ $t('register.birthday') }}</label>
            <b-form-input
              id="input-birthday"
              v-model="$v.form.dateOfBirth.$model"
              type="date"
              :state="validateState('dateOfBirth')"
              aria-describedby="input-birthday-feedback"
            ></b-form-input>
            <b-form-invalid-feedback　id="input-birthday-feedback">
              {{ $t("register.birthdayInvalidFeedback") }}
            </b-form-invalid-feedback>
          </div>
  
          <div class="mb-3">
            <label for="input-passport-num">{{ $t("register.passportNo") }}</label>
            <b-form-input
              id="input-passport-num"
              v-model="$v.form.passportNo.$model"
              :placeholder="$t('register.passportNoPlaceHolder')"
              :state="validateState('passportNo')"
              aria-describedby="input-passport-num-feedback"
            ></b-form-input>
            <b-form-invalid-feedback　id="input-passport-num-feedback">
              {{ $t("register.passportNoInvalidFeedback") }}
            </b-form-invalid-feedback>
          </div>
  
          <div class="mb-3">
            <label for="input-expiry">{{ $t("register.passportExpiry") }}</label>
            <b-form-input
              id="input-expiry"
              v-model="$v.form.passportExpiry.$model"
              type="date"
              :state="validateState('passportExpiry')"
              aria-describedby="input-expiry-feedback"
            ></b-form-input>
            <b-form-invalid-feedback　id="input-expiry-feedback">
              {{ $t("register.passportExpiryInvalidFeedback") }}
            </b-form-invalid-feedback>
          </div>

          <div class="mb-3">
            <label for="input-country">{{ $t("register.passportCountry") }}</label>
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
              {{ $t("register.passportCountryInvalidFeedback") }}
            </b-form-invalid-feedback>
          </div>
          <hr class="mb-4">

          <h4 class="mb-3">{{ $t("register.contactInfo") }}</h4>

          <div class="mb-3">
            <label for="input-address">{{ $t("register.address") }}</label>
            <b-form-input
              id="input-address"
              v-model="$v.form.address.$model"
              :placeholder="$t('register.addressPlaceHolder')"
              :state="validateState('address')"
              aria-describedby="input-address-feedback"
            ></b-form-input>
            <b-form-invalid-feedback　id="input-address-feedback">
              {{ $t("register.addressInvalidFeedback") }}
            </b-form-invalid-feedback>
          </div>

          <div class="mb-3">
            <label for="input-email">{{ $t("register.email") }}</label>
            <b-form-input
              id="input-email"
              v-model="$v.form.email.$model"
              type="email"
              :state="validateState('email')"
              :placeholder="$t('register.emailPlaceHolder')"
              aria-describedby="input-email-feedback"
            ></b-form-input>
            <b-form-invalid-feedback　id="input-email-feedback">
              {{ $t("register.emailInvalidFeedback") }}
            </b-form-invalid-feedback>
          </div>


          <!-- hidden start  -->
          <div hidden>
            <b-form-group
              id="input-group-13"
              :label="$t('register.brand')"
              label-for="input-brand"
              label-cols-sm="4"
              label-cols-lg="3"
              label-align-sm="right"
            >
              <b-form-input
                id="input-brand"
                v-model="$v.form.brand.$model"
                :state="validateState('brand')"
                aria-describedby="input-brand-feedback"
                disabled
              ></b-form-input>
              <b-form-invalid-feedback　id="input-brand-feedback">
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="input-group-14"
              :label="$t('register.plan')"
              label-for="input-plan"
              label-cols-sm="4"
              label-cols-lg="3"
              label-align-sm="right"
            >
              <b-form-input
                id="input-plan"
                v-model="$v.form.plan.$model"
                :state="validateState('plan')"
                aria-describedby="input-plan-feedback"
                disabled
              ></b-form-input>
              <b-form-invalid-feedback　id="input-plan-feedback">
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
          <!-- hidden end  -->
        
  
          <b-form-checkbox v-model="accepted" :value="read" :unchecked-value="!read">
            {{ $t("register.accept") }}
            <a href="/static/private_policy.pdf" target="_blank">
              {{ $t("register.privatePolicy") }}
            </a>
          </b-form-checkbox>
          <hr class="mb-4">

          <b-button @click="showModal" variant="primary" v-bind:disabled="!accepted" class="btn-block">
            {{ $t("register.submit") }}
          </b-button>
          <b-button type="reset" variant="danger" class="btn-block">
            {{ $t("register.reset") }}
          </b-button>
        </div>

      </div>
    </b-form>
  </div>
</template>

<script>
  import { required, alpha, email, numeric, alphaNum, minLength, maxLength } from 'vuelidate/lib/validators'
  import { validationMixin } from 'vuelidate'

  export default {
    mixins: [validationMixin],
    data() {
      return {
        form: {
          suffix: 'MR',
          firstName: 'test',
          middleName: 'test',
          lastName: 'test',
          simNo: '1234567890123',
          passportNo: 'test',
          passportExpiry: '2010-10-10',
          passportCountry: 'JP',
          address: 'test',
          dateOfBirth: '2010-10-10',
          email: 'test@test.com',
          brand: 'Optus',
          plan: '40'
        },
        suffixes: ['MR', 'MRS', 'MISS'],
        countries: { 'JP': 'Japan' },
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
        simNo: {
          required,
          numeric,
          minLength: minLength(13),
          maxLength: maxLength(13)
        },
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
          this.makeToast('success', this.$t('register.successfulMessage'))
        })
        .catch(error => {
          this.makeToast('danger', this.$t('register.errorMessage'))
        })
      },
      makeToast(variant, message) {
        this.$bvToast.toast(message, {
          noAutoHide: true,
          variant: variant
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