import Vue from "vue"
import VueI18n from "vue-i18n"

// i18n
Vue.use(VueI18n)

const messages = {
  en: {
    register: {
      title: "Register SIM Card",
      simCardInfo: "SIM Card Information",
      brandAndPlan: "Bran and Plan",
      customerInfo: "Customer Information",
      contactInfo: "Contact Information",
      suffix: "Suffix",
      suffixTooltip: "MR: Male <br> MRS: Married Woman <br> MISS: Unmarried Woman",
      firstName: "First Name",
      firstNamePlaceHolder: "Enter first name.",
      firstNameInvalidFeedback: "First name is a required field and only accepts alphabet.",
      middleName: "Middle Name",
      optional: "Optional",
      middleNamePlaceHolder: "Enter middle name.",
      middleNameInvalidFeedback: "Middle name only accepts alphabet.",
      lastName: "Last Name",
      lastNamePlaceHolder: "Enter last name.",
      lastNameInvalidFeedback: "Last name is a required field only accepts alphabet.",
      simNo: "SIM No",
      simNoPlaceHolder: "Enter SIM card number.",
      simNoInvalidFeedback: "SIM card number is a required field and only accepts 13-digit numerics.",
      simNoTooltip: "A 13-digit SIM number is written on the back of the purchased card.",
      passportNo: "Passport No",
      passportNoPlaceHolder: "Enter passport number.",
      passportNoInvalidFeedback: "Passport number is a required field and only accepts alphanumerics.",
      passportExpiry: "Passport Expiry",
      passportExpiryInvalidFeedback: "Passport expiry is a required field.",
      passportCountry: "Passport Country",
      passportCountryInvalidFeedback: "Passport country is a required field.",
      address: "Address in Australia",
      addressPlaceHolder: "Enter address in Australia.",
      addressInvalidFeedback: "Address is a required field.",
      birthday: "Date of Birth",
      birthdayInvalidFeedback: "Date of birth is a required field.",
      email: "Email Address",
      emailPlaceHolder: "Enter email address.",
      emailInvalidFeedback: "Email address is a required field.",
      brand: "Brand",
      plan: "Plan($)",
      accept: "Accept",
      privatePolicy: "Private Policy",
      submit: "Submit",
      reset: "Reset",
      modalTitle: "Please check your information",
      modalContent: "If all of the information is correct, please click ok to submit.",
      successfulMessage: "Register successfully! We will send e-mail to you. If you don't receive the mail, please contact us.",
      errorMessage: "System error! Please contact us."
    },
    nav: {
      title: "Register SIM Card",
      language: "Language",
      languageJapanese: "Japanese",
      languageEnglish: "English"
    }
  },
  ja: {
    register: {
      title: "SIMカード開通専用ページ",
      simCardInfo: "SIM Card Information",
      brandAndPlan: "Bran and Plan",
      customerInfo: "Customer Information",
      contactInfo: "Contact Information",
      suffix: "敬称",
      suffixTooltip: "MR: 男性 <br> MRS: 既婚女性  <br> MISS: 未婚女性",
      firstName: "名前(名)",
      firstNamePlaceHolder: "名前(名)をご記入下さい。",
      firstNameInvalidFeedback: "名前(名)は必須項目で、半角英字のみでご記入下さい。",
      middleName: "ミドルネーム",
      middleNamePlaceHolder: "ミドルネームをご記入下さい。",
      middleNameInvalidFeedback: "ミドルネームは省略可能で、半角英字のみでご記入下さい。",
      optional: "省略可",
      lastName: "苗字(姓)",
      lastNamePlaceHolder: "苗字(姓)をご記入下さい。",
      lastNameInvalidFeedback: "苗字(姓)は必須項目で、半角英字のみでご記入下さい。",
      simNo: "SIMカードナンバー",
      simNoPlaceHolder: "SIMカードナンバーをご記入下さい。",
      simNoInvalidFeedback: "SIMカードナンバーは必須項目で、半角数字のみ13桁でご記入下さい。",
      simNoTooltip: "購入したカード裏面に13桁のSIMナンバーが記載されています。",
      passportNo: "旅券番号",
      passportNoPlaceHolder: "旅券番号をご記入下さい。",
      passportNoInvalidFeedback: "旅券番号は必須項目で、半角英数字のみでご記入下さい。",
      passportExpiry: "旅券有効期限",
      passportExpiryInvalidFeedback: "旅券有効期限は必須項目です。",
      passportCountry: "国籍",
      passportCountryInvalidFeedback: "国籍は必須項目です。",
      address: "オーストラリアの宿泊先",
      addressPlaceHolder: "オーストラリアの宿泊先の記入は日本語、かな及び全角文字が禁止です。",
      addressInvalidFeedback: "オーストラリアの宿泊先は必須項目です。",
      birthday: "生年月日",
      birthdayInvalidFeedback: "生年月日は必須項目です。",
      email: "メールアドレス",
      emailPlaceHolder: "メールアドレスをご記入下さい。",
      emailInvalidFeedback: "メールアドレスをご記入下さい。",
      brand: "通信会社",
      plan: "プラン($)",
      accept: "同意する",
      privatePolicy: "プライバシーポリシー",
      submit: "送信",
      reset: "リセット",
      modalTitle: "入力内容をご確認下さい。",
      modalContent: "入力内容をご確認の上、よろしければ「OK」ボタンを押してください。<br>入力をやり直す場合は、「Cancel」ボタンを押して入力画面に戻り、再度入力してください。",
      successfulMessage: "登録が完了致しました。ご記入頂いたメールアドレス宛に、確認メールをお送りしておりますのでご確認下さい。なお、メールが届かない場合は、恐れ入りますが、購入サイト経由でご連絡頂きますようお願い申し上げます。",
      errorMessage: "登録エラーです。恐れ入りますが、購入サイト経由でご連絡頂きますようお願い申し上げます。"
    },
    nav: {
      title: "SIMカード開通専用ページ",
      language: "言語",
      languageJapanese: "日本語",
      languageEnglish: "英語"
    }
  }
}

// 通过选项创建 VueI18n 实例
export default new VueI18n({
  locale: "ja", // 设置地区
  messages, // 设置地区信息
})