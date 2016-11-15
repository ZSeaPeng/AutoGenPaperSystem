package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.TypesMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Types;
import cn.edu.zjnu.AutoGenPaperSystem.model.TypesJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.TypeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class TypeServiceImpl implements TypeService {

    @Resource
    private TypesMapper typesMapper;

    public int deleteByPrimaryKey(Integer typeId) {
        return 0;
    }

    public int insert(Types record) {
        return 0;
    }

    public int insertSelective(Types record) {
        return 0;
    }

    public Types selectByPrimaryKey(Integer typeId) {
        return null;
    }

    public int updateByPrimaryKeySelective(Types record) {
        return 0;
    }

    public int updateByPrimaryKey(Types record) {
        return 0;
    }

    public List selectTypesBySubjectId(Integer subjectId,int gradeId,String subName,String others,String pointId,String t,String d,String c) {
        List<TypesJson> typesJsonList = new ArrayList<TypesJson>();
        List<Types> typesList = typesMapper.selectTypesBySubjectId(subjectId);
        for (Types types:typesList){
            TypesJson json = new TypesJson();
            json.setId(types.getTypeId());
            json.setName(types.getTypeName());
            json.setUrl("/tiku/"+gradeId+"/"+subName+"/point"+pointId+"/t"+
                    types.getTypeId()+"d"+d+"c"+c);
            typesJsonList.add(json);
        }

        return typesJsonList;
    }


}
