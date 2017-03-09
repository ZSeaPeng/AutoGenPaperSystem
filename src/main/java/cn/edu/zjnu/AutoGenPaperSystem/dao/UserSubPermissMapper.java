package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.UserSubPermiss;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSubPermissMapper {
    int deleteByPrimaryKey(Integer subpermissid);

    int insert(UserSubPermiss record);

    int insertSelective(UserSubPermiss record);

    UserSubPermiss selectByPrimaryKey(Integer subpermissid);

    int updateByPrimaryKeySelective(UserSubPermiss record);

    int updateByPrimaryKey(UserSubPermiss record);

    int updateBySubIdAndUserId(Integer subid,Integer userId);
}