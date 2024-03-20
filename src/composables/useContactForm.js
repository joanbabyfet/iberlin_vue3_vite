import { ref } from 'vue'
import { submitContactForm } from '../api/index'
import { ElMessage } from 'element-plus'
//import { getCurrentInstance } from 'vue'

export default function() {
    //定义表单绑定的ref
    const contactForm = ref(null)
    //定义初始化数据
    const form = ref({
        name: '',
        mobile: '',
        email: '',
        content: '',
    })
    //定义表单验证规则, 文字框用blur(失去焦点), 需要选择的用change(数据改变)
    const rules = {
        name: [{ required: true, message: 'Enter Contact window', trigger: ['blur']}],
        mobile: [{ required: true, message: 'Enter Phone no', trigger: ['blur']}],
        email: [{ required: true, message: 'Enter Email', trigger: ['blur']},
        { type: 'email', message: '邮箱格式错误', trigger: ['blur']}],
        content: [{ required: true, message: 'Enter Message', trigger: ['blur']}],
    }

    const submitForm = () => {
        contactForm.value.validate(async (valid) => {
            if(valid) {
                //发送请求
                submitContactForm(form.value).then(res => {
                    if(res.data.code === 0) {
                        ElMessage.success(res.data.msg)
                        //重置表单
                        contactForm.value.resetFields()
                    }
                    else {
                        ElMessage.error(res.data.msg)
                    }
                }).catch((error)=>{
                    ElMessage.error(error)
                })
            }
        })
    }

    //解决文字框无法输入
    // const { proxy } = getCurrentInstance()
    // const onInput = () => {
    //     proxy.$forceUpdate()
    // }

    return {
        contactForm,
        form,
        submitForm,
        rules,
    }
}