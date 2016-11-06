package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;

import javax.annotation.Resource;

/**
 * Created by sgt on 2016/11/5.
 */
public class UserServiceImpl implements UserService{
    @Resource
    private UserMapper userMapper;


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
    public int updateByUserId(String chosen, int userId) {
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
        if (flag=false){
            change=change+chosen;
        }
        else {
            change=change.substring(0,change.length()-1);
        }
        i=userMapper.updateByUserId(change,userId);
        return i;
    }
}
