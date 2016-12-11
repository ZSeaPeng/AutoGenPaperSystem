package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/18.
 */
@Controller
@RequestMapping(value = "/api/paper")
@ResponseBody
@SessionAttributes("userid")
public class PaperController {


    @Resource
    private UserService userServiceImpl;
    @Resource
    private QuestionsService questionsServiceImpl;
    @Resource
    private PaperService paperServiceImpl;


    @RequestMapping(value = "/getinfo", method = RequestMethod.GET)
    public Map getInfo(@ModelAttribute("userid") Integer userid) {
        String type = "";
        String subName = "";
        return userServiceImpl.selectUserChosenByUSerId(userid, type, subName);
    }

    @RequestMapping(value = "/makepaper", method = RequestMethod.POST)
    public void getPaperList(@RequestBody Integer[] paperlist, @ModelAttribute("userid") Integer userid) {
        User user = userServiceImpl.selectByPrimaryKey(userid);
        user.setUserchosen("0");
        user.setAdd(new ArrayList());
        userServiceImpl.updateByPrimaryKeySelective(user);
        String chosenList = "0";
        for (int p : paperlist) {
            chosenList = chosenList + "," + String.valueOf(p);
        }
        //System.out.println(chosenList);
        Paper paper = new Paper();
        paper.setUserId(userid);
        paper.setQuestionIds(chosenList);

        paperServiceImpl.insertSelective(paper);



    }

    @RequestMapping(value = "/auto", method = RequestMethod.POST)
    public void getAutoInfo(@RequestBody Map map) {
        System.out.println("--");
        System.out.println(map.get("wordtype").toString());

        System.out.println(map.get("subject"));
        System.out.println(map.get("diff"));
        System.out.println(map.get("questions"));
        //System.out.println(map.get("questions"));
        System.out.println(map.get("points"));
    }
}

