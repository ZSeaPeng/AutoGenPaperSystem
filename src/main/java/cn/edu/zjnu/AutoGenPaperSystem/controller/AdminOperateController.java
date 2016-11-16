package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.Knowledge;
import cn.edu.zjnu.AutoGenPaperSystem.model.KnowledgeJson;
import cn.edu.zjnu.AutoGenPaperSystem.model.Subject;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.KnowledgeService;
import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/11.
 */
@Controller
@RequestMapping(value = "/api/admin")
@ResponseBody
public class AdminOperateController {
    @Resource
    private UserService userServiceImpl;
    @Resource
    private SubjectService subjectServiceImpl;
    @Resource
    private KnowledgeService knowledgeServiceImpl;

    @RequestMapping(value = "/userlist", method = RequestMethod.GET)
    public List getAllUsers() {
        return userServiceImpl.selestAllUsers();
    }

    @RequestMapping(value = "/adduser", method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        if (userServiceImpl.insertSelective(user) == 0) {
            return null;
        }
        return user;
    }


    @RequestMapping(value = "/change", method = RequestMethod.POST)
    public User addSubjectCan(@RequestBody User user) {
        if (userServiceImpl.updateByPrimaryKeySelective(user) == 0) {
            return null;
        }
        user.getAdd().clear();
        return user;
    }


    @RequestMapping(value = "/removesubjectcan", method = RequestMethod.POST)
    public String removeSubjectCan(int userid, String subid, int k) {

        if (userServiceImpl.UpdateSubjectCanByUserId(subid, userid) == 0) {
            return null;
        }
        String subjectCan = userServiceImpl.selectSubjectCanByUserId(userid);
        String response = "{\"k\":" + k + ",\"subjectcan\":" + "\"" + subjectCan + "\"" + "}";
        return response;
    }

    //@RequestMapping(value = "/deleteuser", method = RequestMethod.POST)
    //public int deleteUser(int userid) {
    //    return userServiceImpl.deleteByPrimaryKey(userid);
    //}

    @RequestMapping(value = "/courselist", method = RequestMethod.GET)
    public List getCourseList() {
        return subjectServiceImpl.selectAllSubjectOnAdmin();
    }

    @RequestMapping(value = "/addcourse", method = RequestMethod.POST)
    public Map addSubject(String course) {
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
        map.put("points", new KnowledgeJson());
        return map;
    }

    @RequestMapping(value = "/deleteuser", method = RequestMethod.POST)
    public int deleteUser(Integer userid) {

        return userServiceImpl.updateIsDeleteByUserId(userid);
    }

    @RequestMapping(value = "/deletepoint", method = RequestMethod.POST)
    public List deletePoint(Integer pointid) {
        if (knowledgeServiceImpl.updateIsDeleteById(pointid) == 0) {
            return null;
        }
        return subjectServiceImpl.selectAllSubjectOnAdmin();
    }

    @RequestMapping(value = "/addpoint", method = RequestMethod.POST)
    public List addPoint(String subName, int id, int i, String point) {
        int subId = subjectServiceImpl.selectBysubName(subName);
        Knowledge knowledge = new Knowledge();
        knowledge.setKnowledgeName(point);
        knowledge.setSubjectId(subId);
        knowledge.setSuperiorId(id);
        if (knowledgeServiceImpl.insertSelective(knowledge)==0){
            return null;
        }
        return subjectServiceImpl.selectAllSubjectOnAdmin();
    }
}
