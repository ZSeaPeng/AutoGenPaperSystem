package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    int updateByUserId(String chosen, int userId);

    int updateCollectByUserId(String collect, int userId);

    int updateIsDeleteByUserId(Integer userid);

    int selectByUserName(String userName);

    User selectUserByUserName(String userName);

    List<User> selectAllUsers();

    int updateSubjectCanByUserId(int userId,String subId);

    String selectSubjectCanByUserId(int userId);
}