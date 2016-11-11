package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zseapeng on 2016/11/11.
 */
@Controller
@RequestMapping(value = "/api/admin")
@ResponseBody
public class AdminOperateController {
    @Resource
    private UserService userServiceImpl;

    @RequestMapping(value = "/userlist",method = RequestMethod.GET)
    public List getAllUsers(){
        for (User u:userServiceImpl.selestAllUsers()){
            System.out.println("id---"+u.getUserId());
            
        }
        return userServiceImpl.selestAllUsers();
    }

    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public void addUser(){
        User user = new User();
        user.setUsername("test1");
        user.setUserpassword("123456");
        userServiceImpl.insertSelective(user);
    }
}
