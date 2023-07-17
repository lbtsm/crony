export default {
    title: "Crony定时任务平台",
    common: {
        add: "新增",
        edit: "编辑",
        deletes: "批量删除",
        delete: "删除",
        search: "查询",
        reset: "重置",
        operation: "操作",
        id_query: "请输入id",
        delete_warn: "请选择要删除的id",
        delete_success: "删除成功",
        delete_question: "确定要删除",
        prompt: "提示",
        add_success: "添加成功",
        edit_success: "更新成功",
        role_error: "请按照正确格式填写",
        cancel: "取消",
        submit: "提交",
        export: "导出表格",
    },
    menu: {
        home: "首页",
        user: "用户管理",
        node: "节点管理",
        job: "任务管理",
        log: "日志管理",
        server: "服务器状态",
        add_job: "新增任务",
        edit_job: "编辑任务",
        node_job: "节点任务",
        error: "错误处理",
        setting:"设置",
        script:"预设脚本",
        edit_script:"编辑脚本",
        add_script:"添加脚本",

    },
    setting: {
        title: "系统界面设置",
        language: "语言设置",
        navigation: "导航标签",
        size: "元素大小",
        style: "系统风格",
        skin: "换肤设置",
        round: "圆润",
        square: "方正",
        cancel: "取消全屏",
        full: "全屏浏览",
    },
    user: {
        mine: "个人中心",
        change_pw: "修改密码",
        logout: "退出登录",
        user_list: "用户列表",
        name: "姓名",
        role: "角色",
        name_query: "请输入用户姓名关键字",
        role_query: "请选择角色",
        email: "邮箱",
        created: "注册时间",
        password: "密码",
        old_password: "旧密码",
        new_password: "新密码",
        password_form: "请填写密码",
        name_form: "请填写用户姓名",
        email_form: "请填写邮箱地址",
    },
    node: {
        node_list: "节点列表",
        uuid_form: "请输入节点uuid",
        ip_form: "请输入节点ip",
        created: "激活时间",
        job_count: "任务数量",
        version: "版本",
        server: "节点状态",
    },
    job: {
        job_list: "任务列表",
        id: "任务ID",
        id_form: "请输入任务ID",
        name: "任务名",
        name_form: "请输入任务名称",
        uuid: "节点uuid",
        uuid_form: "请输入节点uuid",
        script: "预设脚本",
        script_form: "请选择预设脚本，该脚本仅会在创建任务的时候执行一次",

        type: "任务类型",
        command: "执行命令",
        command_form: '请输入任务执行命令,比如[shell命令]:echo "hello world",[http回调post方法]:http://api?{"name":"test"}',
        run_on: "运行节点",
        run_on_form: "请选择运行节点",
        allocation: "节点分配方式",
        allocation_form: "请选择节点分配方式",
        auto: "自动",
        manual: "手动",
        cron: "cron表达式",
        cron_form: "请输入cron表达式",
        http_method: "http回调方法",
        timeout: "超时设置",
        retry_time: "重试次数",
        retry_interval: "重试时间间隔",
        notify_to: "通知对象ID",
        notify_method: "通知方式",
        note: "备注",
        created: "创建时间",
        log: "查看日志",
        once: "立即执行",
        type_tip: "shell任务支持一系列的linux命令执行; http回调支持get和post请求,其中post可以携带参数,以?分隔",
        cron_conf: "定时配置",
        cron_produce: "自动生成cron表达式",
        allocation_conf: "节点分配",
        allocation_tip: "支持http回调自动分配,shell任务可通过相应的预设脚本来配置服务器的环境，从而实现自动分配",
        job_conf: "任务配置",
        job_tip: "单位秒,超时时间为0表示不设置，默认超时时间为0,失败重试次数为3次,重试时间间隔为1s,日志清除时间间隔为7天",
        notify_conf: "通知设置",
        notify_tip: "支持邮件和webhook两种通知方式,都需要后台在配置文件中修改",
        notify_form: "选择通知用户,可多选",
    },
    log: {
        id: "日志ID",
        log_list: "日志列表",
        execution_time: "执行时间",
        status: "执行情况",
        output: "输出结果",

    },
    script: {
        id: "脚本ID",
        id_form: "请输入脚本ID",
        name: "脚本名",
        name_form: "请输入脚本名",
        command: "脚本内容",
        command_form: "请输入脚本内容",
        script_list: "预设脚本列表",
        create_time: "创建时间",
    },
    system: {
        admin_server: "后台管理服务器状态",
        node_server: `节点服务器状态`,
    },
    home: {
        hello: "早安，管理员，请开始一天的工作吧",
        weather: "今日晴，0℃ - 10℃，天气寒冷，注意添加衣物。",
        today_job: "今日任务执行情况",
        week_job: "过去一周任务执行情况",
        node: "正常/异常节点",
        job: "任务执行总数/正在运行数",
        job_fail: "今日执行失败数",
    },
    login: {
        title: "账号登录",
        account: "账号",
        account_form: "请输入账号",
        remember: "记住账号",
        login: "登录"
    }
}

//  :label="$t('message.uname')"
// :placeholder="$t('user.password_form')"
//   <span class="title">{{$t('message.title')}}</span>