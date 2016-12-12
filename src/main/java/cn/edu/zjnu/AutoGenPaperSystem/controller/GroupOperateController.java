package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.ComManagerService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zseapeng on 2016/11/28.
 */
@Controller
@RequestMapping(value = "/api/commanager")
@SessionAttributes("commanager")
@ResponseBody
public class GroupOperateController {

    @Resource
    private ComManagerService comManagerServiceImpl;


    private static int userId = 1;

    @RequestMapping(value = "/showusers", method = RequestMethod.GET)
    public List showUsers() {
        List userList = comManagerServiceImpl.selectUserListById(userId);
        return userList;
    }

    @RequestMapping(value = "/adduser", method = RequestMethod.POST)
    public String addUser(@RequestBody User user) {
        comManagerServiceImpl.updateUserList(user, userId);
        return null;
    }


}
