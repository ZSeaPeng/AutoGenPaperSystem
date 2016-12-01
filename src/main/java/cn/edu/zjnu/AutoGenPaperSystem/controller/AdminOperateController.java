package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.*;
import cn.edu.zjnu.AutoGenPaperSystem.service.*;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/11.
 */
@Controller
@RequestMapping(value = "/api/admin")
@SessionAttributes("adminpassword")
@ResponseBody
public class AdminOperateController {
    @Resource
    private UserService userServiceImpl;
    @Resource
    private SubjectService subjectServiceImpl;
    @Resource
    private KnowledgeService knowledgeServiceImpl;
    @Resource
    private AdminService adminServiceImpl;
    @Resource
    private TemporaryService temporaryServiceImpl;
    @Resource
    private ComManagerService comManagerServiceImpl;

    @RequestMapping(value = "/userlist", method = RequestMethod.GET)
    public List getAllUsers(@ModelAttribute("adminpassword") String password) {
        System.out.println("Sessionpassword---" + password);
        return userServiceImpl.selestAllUsers();
    }

    @RequestMapping(value = "/adduser", method = RequestMethod.POST)
    public User addUser(@RequestBody User user, @ModelAttribute("adminpassword") String password) {
        user.setUserpassword(String.valueOf(new Md5Hash(user.getUserpassword(), user.getUserpassword())));
        if (userServiceImpl.insertSelective(user) == 0) {
            return null;
        }
        return userServiceImpl.selectUserByUserName(user.getUsername());
    }


    @RequestMapping(value = "/change", method = RequestMethod.POST)
    public User addSubjectCan(@RequestBody User user, @ModelAttribute("adminpassword") String password) {
        if (userServiceImpl.updateByPrimaryKeySelective(user) == 0) {
            return null;
        }
        user.getAdd().clear();
        return user;
    }


    @RequestMapping(value = "/removesubjectcan", method = RequestMethod.POST)
    public String removeSubjectCan(int userid, String subid, int number, int k, @ModelAttribute("adminpassword") String password) {

        String subNumber = subid + "(" + number + ")";

        if (userServiceImpl.UpdateSubjectCanByUserId(subNumber, userid) == 0) {
            return null;
        }
        String subjectCan = userServiceImpl.selectSubjectCanByUserId(userid);
        String response = "{\"k\":" + k + ",\"subjectcan\":" + "\"" + subjectCan + "\"" + "}";
        return response;
    }


    @RequestMapping(value = "/courselist", method = RequestMethod.GET)
    public List getCourseList(@ModelAttribute("adminpassword") String password) {
        return subjectServiceImpl.selectAllSubjectOnAdmin();
    }

    @RequestMapping(value = "/deletecourse", method = RequestMethod.POST)
    public List deleteCourse(Integer subid, @ModelAttribute("adminpassword") String password) {
        if (subjectServiceImpl.updateIsDeleteBySubId(subid) == 0) {
            return null;
        }
        return subjectServiceImpl.selectAllSubjectOnAdmin();
    }

    @RequestMapping(value = "/addcourse", method = RequestMethod.POST)
    public Map addSubject(String course, @ModelAttribute("adminpassword") String password) {
        Subject subject = new Subject();
        subject.setSubjectName(course);
        subject.setGradeId(1);
        int i = subjectServiceImpl.insertSelective(subject);
        if (i == 0) {
            return null;
        }
        Map map = new HashMap();
        map.clear();
        map.put("subName", course);
        List knowedgeJsonList = new ArrayList();
        knowedgeJsonList.add(new KnowledgeJson());
        map.put("points", knowedgeJsonList);
        knowedgeJsonList.clear();
        return map;
    }


    @RequestMapping(value = "/deleteuser", method = RequestMethod.POST)
    public int deleteUser(Integer userid, @ModelAttribute("adminpassword") String password) {

        return userServiceImpl.updateIsDeleteByUserId(userid);
    }

    @RequestMapping(value = "/deletepoint", method = RequestMethod.POST)
    public List deletePoint(Integer pointid, @ModelAttribute("adminpassword") String password) {

        if (knowledgeServiceImpl.updateIsDeleteById(pointid) == 0) {
            return null;
        }
        return subjectServiceImpl.selectAllSubjectOnAdmin();
    }

    @RequestMapping(value = "/addpoint", method = RequestMethod.POST)
    public List addPoint(String subName, int id, String point, @ModelAttribute("adminpassword") String password) {
        int subId = subjectServiceImpl.selectBysubName(subName);
        Knowledge knowledge = new Knowledge();
        knowledge.setKnowledgeName(point);
        knowledge.setSubjectId(subId);
        knowledge.setSuperiorId(id);
        if (knowledgeServiceImpl.insertSelective(knowledge) == 0) {
            return null;
        }
        return subjectServiceImpl.selectAllSubjectOnAdmin();
    }


    @RequestMapping(value = "/addtemporary", method = RequestMethod.POST)
    public String addTemporary(@RequestBody Temporary temporary, @ModelAttribute("adminpassword") String password) {

        temporaryServiceImpl.insertSelective(temporary);
        return null;
    }

    @RequestMapping(value = "/showtemp", method = RequestMethod.GET)
    public List showTemp(@ModelAttribute("adminpassword") String password) {
        return temporaryServiceImpl.selectAll();
    }

    @RequestMapping(value = "/deletetemp", method = RequestMethod.POST)
    public String deleteTemp(@ModelAttribute("adminpassword") String password, int tempuserid) {
        temporaryServiceImpl.updateDeleteById(tempuserid);
        return null;
    }


    @RequestMapping(value = "/showcommanager", method = RequestMethod.GET)
    public List showComManager() {
        System.out.println(comManagerServiceImpl.selectAll());
        return comManagerServiceImpl.selectAll();
    }

    @RequestMapping(value = "/deletecommanager", method = RequestMethod.POST)
    public String deleteCom(@ModelAttribute("adminpassword") String password, int tempuserid) {
        comManagerServiceImpl.updateDeleteById(tempuserid);
        // TODO: 2016/12/1
        return null;
    }

    @RequestMapping(value = "/addcommanager",method = RequestMethod.POST)
    public String addComManager(@RequestBody ComManager commanager){
        comManagerServiceImpl.insertSelective(commanager);
        return null;
    }





    @RequestMapping(value = "/questionnumber", method = RequestMethod.POST)
    public String setQuestionNumber(@ModelAttribute("adminpassword") String password) {
//// TODO: 2016/11/30

        return null;

    }


}
