Feature:设备管理
    为了管理设备
    作为设备管理员
    我想要管理设备
  Scenario: 创建设备
    Given 打开设备页面
    When 创建设备
    Then 看见文字 "设备创建成功","恭喜您"

