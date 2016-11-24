package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public Object showInfo(@ModelAttribute("userid") Integer userid){
        System.out.println("userid----->"+userid);
        User user = userServiceImpl.selectByPrimaryKey(userid);
        System.out.println(user);
        return null;
    }

    @RequestMapping(value = "/change",method = RequestMethod.POST)
    public String change(){
        return null;
    }


}
