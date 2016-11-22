package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by zseapeng on 2016/11/16.
 */
@Controller
@RequestMapping(value = "/api/login")
@SessionAttributes("userid")
public class LoginController {

    @Resource
    private UserService userServiceImpl;


    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody String Login(String username, String password, ModelMap model, HttpSession session){
        String tempPassword= String.valueOf(new Md5Hash(password,password));
        User userTemp = userServiceImpl.selectUserByUserName(username);

        if (userTemp == null){
            return "用户不存在";
        }

        if (!userTemp.getUserpassword().equals(tempPassword)){
            return "密码错误";
        }
        model.put("userid",Integer.valueOf(userTemp.getUserId()));
        model.addAttribute("userid",Integer.valueOf(userTemp.getUserId()));
        System.out.println("userTemp.getUserId()-----"+userTemp.getUserId());
        return "{\"success\":success}";
    }
    @RequestMapping(value = "/logout",method = RequestMethod.GET)
    public void Logout(@ModelAttribute("userid") Integer userid){

        System.out.println("userid---"+userid);
    }

}
