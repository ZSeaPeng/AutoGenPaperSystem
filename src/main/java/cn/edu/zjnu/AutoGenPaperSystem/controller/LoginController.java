package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by zseapeng on 2016/11/16.
 */
@Controller
@RequestMapping(value = "/api/login")
@ResponseBody
public class LoginController {

    @Resource
    private UserService userServiceImpl;

    @RequestMapping(method = RequestMethod.POST)
    public String Login(String username, String password, HttpSession session){
        String tempPassword= String.valueOf(new Md5Hash(password,password));

        if (userServiceImpl.selectByUserName(username) == 0){
            return "用户不存在";
        }
        User userTemp = userServiceImpl.selectUserByUserName(username);
        if (!userTemp.getUserpassword().equals(tempPassword)){
            return "密码错误";
        }
        session.setAttribute("userid",userTemp.getUserId());
        return "success";
    }

}
