package cn.edu.zjnu.AutoGenPaperSystem.service;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;

import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/4.
 */
public interface UserService  {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    Map updateByUserId(String chosen, int userId,int k);

    Map updateCollectByUserId(String collect,int userId,int k);

    int allremove(int userid);

    int selectByUserName(String userName);

    List<User> selestAllUsers();

    int UpdateSubjectCanByUserId(String subId,int userId);
}
