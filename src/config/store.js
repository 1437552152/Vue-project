import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    member: null,
    activeNav: '',
    lang: '',
    usdcny: '',
    backStatus: false, // 用来判断登录和注册页面的footer和其他页面不一样
    ecoin: "",
    sureShow: false,
    language: "",
    isId: false,
  },
  mutations: {
    setShow(state, sureShow) {
      state.sureShow = sureShow;
    },
    setIsId(state, isId) {
      state.isId = isId;
    },
    setBackStatus(state, backStatus) {
      state.backStatus = backStatus;
    },
    navigate(state, nav) {
      state.activeNav = nav;
    },
    setMember(state, member) {
      state.member = member;
      localStorage.setItem('MEMBER', JSON.stringify(member));
    },
    recoveryMember(state) {
      state.member = JSON.parse(localStorage.getItem('MEMBER'));
    },
    setlang(state, lang) {
      state.lang = lang;
      localStorage.setItem('LANGUAGE', JSON.stringify(lang));
    },
    setlanguage(state, language) {
      state.language = language;
    },
    initLang(state) {
      if (localStorage.getItem('LANGUAGE') == null) {
        state.lang = "简体中文";
      } else {
        state.lang = JSON.parse(localStorage.getItem('LANGUAGE'));
      }
    },
    leftmenu(state, nav) {
      state.activeMenuName = nav;
    },
    setUsdcny(state, usdcny) {
      state.usdcny = usdcny;
      localStorage.setItem('usdcny', JSON.stringify(usdcny));
    },
    setCoin(state, ecoin) {
      state.ecoin = ecoin;
      localStorage.setItem('ecoin', JSON.stringify(ecoin));
    }
  },
  getters: {
    member(state) {
      return state.member;
    },
    isLogin(state) {
      return state.member != null;
    },
    lang(state) {
      return state.lang;
    },
    eth(state) {
      return state.eth;
    },
    ecoin(state) {
      return state.ecoin;
    },
  }
});
