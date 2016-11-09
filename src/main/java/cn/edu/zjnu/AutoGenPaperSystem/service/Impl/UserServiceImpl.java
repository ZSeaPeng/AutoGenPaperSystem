package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by sgt on 2016/11/5.
 */
@Service
public class UserServiceImpl implements UserService{
    @Resource
    private UserMapper userMapper;
    @Resource
    private QuestionsMapper questionsMapper;

    @Override
    public int deleteByPrimaryKey(Integer userId) {
        return 0;
    }

    @Override
    public int insert(User record) {
        return 0;
    }

    @Override
    public int insertSelective(User record) {
        return 0;
    }

    @Override
    public User selectByPrimaryKey(Integer userId) {
        return null;
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        return 0;
    }

    @Override
    public int updateByPrimaryKey(User record) {
        return 0;
    }

    @Override
    public Map updateByUserId(String chosen, int userId,int k) {
        User user=userMapper.selectByPrimaryKey(userId);
        String []quesId=user.getUserchosen().split(",");
        String change="";
        int i=0;
        Boolean flag=false;
        for (String list:quesId){
            if (list.equals(chosen)){
                flag=true;
                continue;
            }
            change=change+list+",";
        }
        if (flag==false){
            change=change+chosen;
        }
        else {
            change=change.substring(0,change.length()-1);
        }
        i=userMapper.updateByUserId(change,userId);
        Map<String,Object> questionsMap=new HashMap<String, Object>();
        if (i>0){
            Questions questions= questionsMapper.selectQuestionByIdList(Integer.parseInt(chosen));

            questionsMap.put("id",questions.getQuestionsId());
            questionsMap.put("type",questions.getTypes().getTypeName());
            questionsMap.put("k",k);
        }
        else {
            questionsMap.put("Error","更新失败");
        }
        return questionsMap;
    }

    @Override
    public Map updateCollectByUserId(String collect, int userId,int k) {
        User user=userMapper.selectByPrimaryKey(userId);
        String []quesId=user.getUsercollection().split(",");
        String change="";
        int i=0;
        Boolean flag=false;
        for (String list:quesId){
            if (list.equals(collect)){
                flag=true;
                continue;
            }
            change=change+list+",";
        }
        if (flag==false){
            change=change+collect;
        }
        else {
            change=change.substring(0,change.length()-1);
        }
        i=userMapper.updateCollectByUserId(change,userId);
        Map questionmap = new HashMap();
        questionmap.put("id",collect);
        questionmap.put("k",k);
        return questionmap;
    }

    @Override
    public int allremove(int userid) {
        User user = userMapper.selectByPrimaryKey(userid);
        int i = userMapper.updateByUserId("0",userid);
        return i;
    }

}


