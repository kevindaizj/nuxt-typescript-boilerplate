import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FooterComponent extends Vue {
  
    year = new Date().getFullYear();
    
}