package cn.edu.zjnu.AutoGenPaperSystem.dao;

import cn.edu.zjnu.AutoGenPaperSystem.model.Annotations;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnotationsMapper {
    int deleteByPrimaryKey(Integer annotateid);

    int insert(Annotations record);

    int insertSelective(Annotations record);

    Annotations selectByPrimaryKey(Integer annotateid);

    int updateByPrimaryKeySelective(Annotations record);

    int updateByPrimaryKey(Annotations record);
}