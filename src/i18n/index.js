import Vue from 'vue'
import VueI18n from 'vue-i18n'

// i18n
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'hello world'
    },
    register: {
      title: 'Register SIM Card',
      suffix: 'Suffix:',
      firstName: 'First Name:',
      firstNamePlaceHolder: 'Enter first name.',
      firstNameInvalidFeedback: 'First name is a required field and only accepts alphabet.',
      middleName: 'Middle Name (Optional):',
      middleNamePlaceHolder: 'Enter middle name.',
      middleNameInvalidFeedback: 'Middle name only accepts alphabet.',
      lastName: 'Last Name:',
      lastNamePlaceHolder: 'Enter last name.',
      lastNameInvalidFeedback: 'Last name is a required field only accepts alphabet.',
      simNo: 'SIM No:',
      simNoPlaceHolder: 'Enter SIM card number.',
      simNoInvalidFeedback: 'SIM card number is a required field and only accepts numerics.',
      passportNo: 'Passport No:',
      passportNoPlaceHolder: 'Enter passport number.',
      passportNoInvalidFeedback: 'Passport number is a required field and only accepts alphanumerics.',
      passportExpiry: 'Passport Expiry:',
      passportExpiryInvalidFeedback: 'Passport expiry is a required field.',
      passportCountry: 'Passport Country:',
      passportCountryInvalidFeedback: 'Passport country is a required field.',
      address: 'Address in Australia:',
      addressPlaceHolder: 'Enter address in Australia.',
      addressInvalidFeedback: 'Address is a required field.',
      birthday: 'Date of Birth:',
      birthdayInvalidFeedback: "Date of birth is a required field.",
      email: 'Email Address:',
      emailPlaceHolder: 'Enter email address.',
      emailInvalidFeedback: 'Email address is a required field.',
      brand: 'Brand:',
      plan: 'Plan($):',
      accept: 'Accept',
      privatePolicy: 'Private Policy',
      submit: 'Submit',
      reset: 'Reset',
      modalTitle: 'Please check your information',
      modalContent: 'If all of the information is correct, please click ok to submit.'
    }
  },
  ja: {
    register: {
      title: 'SIMカード開通専用ページ',
      suffix: '敬称：',
      firstName: '名前(名)：',
      firstNamePlaceHolder: '名前(名)をご記入下さい。',
      firstNameInvalidFeedback: '名前(名)は必須項目で、半角英字のみでご記入下さい。',
      middleName: 'ミドルネーム (省略可)：',
      middleNamePlaceHolder: 'ミドルネームをご記入下さい。',
      middleNameInvalidFeedback: 'ミドルネームは省略可能で、半角英字のみでご記入下さい。',
      lastName: '苗字(姓)：',
      lastNamePlaceHolder: '苗字(姓)をご記入下さい。',
      lastNameInvalidFeedback: '苗字(姓)は必須項目で、半角英字のみでご記入下さい。',
      simNo: 'SIMカードナンバー：',
      simNoPlaceHolder: 'SIMカードナンバーをご記入下さい。',
      simNoInvalidFeedback: 'SIMカードナンバーは必須項目で、半角数字のみでご記入下さい。',
      passportNo: '旅券番号：',
      passportNoPlaceHolder: '旅券番号をご記入下さい。',
      passportNoInvalidFeedback: '旅券番号は必須項目で、半角英数字のみでご記入下さい。',
      passportExpiry: '旅券有効期限：',
      passportExpiryInvalidFeedback: '旅券有効期限は必須項目です。',
      passportCountry: '国籍：',
      passportCountryInvalidFeedback: '国籍は必須項目です。',
      address: 'オーストラリアの宿泊先：',
      addressPlaceHolder: 'オーストラリアの宿泊先の記入は日本語、かな及び全角文字が禁止です。',
      addressInvalidFeedback: 'オーストラリアの宿泊先は必須項目です。',
      birthday: '生年月日：',
      birthdayInvalidFeedback: '生年月日は必須項目です。',
      email: 'メールアドレス：',
      emailPlaceHolder: 'メールアドレスをご記入下さい。',
      emailInvalidFeedback: 'メールアドレスをご記入下さい。',
      brand: '通信会社：',
      plan: 'プラン($)：',
      accept: '同意する',
      privatePolicy: 'プライバシーポリシー',
      submit: '送信',
      reset: 'リセット'
    }
  }
}

// 通过选项创建 VueI18n 实例
export default new VueI18n({
  locale: 'ja', // 设置地区
  messages, // 设置地区信息
})