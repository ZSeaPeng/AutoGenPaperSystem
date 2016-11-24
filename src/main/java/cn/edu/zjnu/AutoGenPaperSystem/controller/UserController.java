package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.annotation.Resource;

/**
 * Created by zseapeng on 2016/11/22.
 */
@Controller
@RequestMapping("/api/user")
@SessionAttributes("userid")
@ResponseBody
public class UserController {
    @Resource
    private UserService userServiceImpl;

    @RequestMapping(value = "/show",method = RequestMethod.GET)
    public Object showInfo(){
        return null;
    }


}
