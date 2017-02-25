package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Admin;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper {
    int insert(Admin record);

    int insertSelective(Admin record);

    Admin selectByadminName(String adminName);

    int setMaxQuantity(Integer maxQuantity);

    int selectMaxQuantity();
}