Feature:用户登录
    为了xxxx
    作为xxxx
    我想要xxxx

    Scenario Outline: 登录测试
        Given 输入"<账号>","<密码>"
        When 登录
        Then 看见文字 "登录成功"
        Examples:
            | 账号    | 密码     |
            | admin | 123456 |
            | user  | 123456 |

