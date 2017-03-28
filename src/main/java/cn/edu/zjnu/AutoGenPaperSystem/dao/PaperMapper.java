package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

public interface PaperMapper {
    int deleteByPrimaryKey(Long paperid);

    int insert(Paper record);

    int insertSelective(Paper record);

    Paper selectByPrimaryKey(Long paperid);

    int updateByPrimaryKeySelective(Paper record);

    int updateByPrimaryKey(Paper record);

    List<Paper> selectByUserId(Integer userid);
}