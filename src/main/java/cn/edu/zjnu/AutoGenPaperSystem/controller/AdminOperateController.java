package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
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

    @RequestMapping(value = "/userlist", method = RequestMethod.GET)
    public List getAllUsers() {
        return userServiceImpl.selestAllUsers();
    }

    @RequestMapping(value = "/adduser", method = RequestMethod.POST)
    public void addUser() {
        User user = new User();
        user.setUsername("test1");
        user.setUserpassword("123456");
        userServiceImpl.insertSelective(user);
    }

    @RequestMapping(value = "/change", method = RequestMethod.POST)
    public User addSubjectCan(@RequestBody User user) {
        userServiceImpl.updateByPrimaryKeySelective(user);
        user.getAdd().clear();
        return user;
    }

    @RequestMapping(value = "/removesubjectcan", method = RequestMethod.POST)
    public String removeSubjectCan(int userid, String subid, int k) {

        userServiceImpl.UpdateSubjectCanByUserId(subid, userid);
        String subjectCan = userServiceImpl.selectSubjectCanByUserId(userid);
        String response = "{\"k\":" + k + ",\"subjectcan\":" + "\""+subjectCan +"\""+ "}";
        return response;
    }

}
