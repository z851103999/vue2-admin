import {
	Button,
	Select,
	Switch,
	Menu,
	MenuItem,
	Submenu,
	Aside,
	Container,
	Main,
	Tooltip,
	Form,
	FormItem,
	Input,
	Divider,
	Table,
	TableColumn,
	DatePicker,
	Checkbox,
	CheckboxButton,
	CheckboxGroup,
	TimePicker,
	Radio,
	RadioButton,
	RadioGroup,
	Option,
	OptionGroup,
	Col,
	Row,
	Dialog,
	MessageBox,
	Message,
	Loading
} from 'element-ui'
import Vue from 'vue'

Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
Vue.use(OptionGroup)
Vue.use(Option)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Radio)
Vue.use(TimePicker)
Vue.use(CheckboxGroup)
Vue.use(CheckboxButton)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Divider)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)

// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}

Loading.install = function (Vue,option){
	Vue.prototype.$loading = Loading
}
// MeesageBox.install = function(Vue,option){
// 	Vue.prototype.$msgbox = MessageBox;
// }
