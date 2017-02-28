package cn.edu.zjnu.AutoGenPaperSystem.service.Impl;

import cn.edu.zjnu.AutoGenPaperSystem.dao.CharactionMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Charaction;
import cn.edu.zjnu.AutoGenPaperSystem.model.CharactionJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.CharacterService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zseapeng on 2016/9/22.
 */
@Service
public class CharacterServiceImpl implements CharacterService {
    @Resource
    private CharactionMapper charactionMapper;

    public int deleteByPrimaryKey(Integer charactId) {
        return 0;
    }

    public int insert(Charaction record) {
        return 0;
    }


    public int insertSelective(Charaction record) {
        return 0;
    }

    public Charaction selectByPrimaryKey(Integer charactId) {
        return null;
    }

    public int updateByPrimaryKeySelective(Charaction record) {
        return 0;
    }

    public int updateByPrimaryKey(Charaction record) {
        return 0;
    }

    @Override
    public int selectIdByName(String name) {
        return charactionMapper.selectIdByName(name);
    }

    public List selectAllCharat(Integer subjectId,int gradeId,String subName,String others,String pointId,String t,String d,String c) {
        List<CharactionJson> charactionJsonList=new ArrayList<CharactionJson>();
        List<Charaction> charactionList=charactionMapper.selectAllCharat();
        CharactionJson charactJson=new CharactionJson();
        charactJson.setId(0);
        charactJson.setName("全部");
        charactJson.setUrl("/tiku/"+gradeId+"/"+subName+"/point"+pointId+"/t"+t+"d"+
                d+"c"+0);
        if (c.equals("0")){
            charactJson.setSelect(true);
        }
        charactionJsonList.add(charactJson);
        for (Charaction list:charactionList){
            CharactionJson charactionJson=new CharactionJson();
            charactionJson.setId(list.getCharactId());
            charactionJson.setName(list.getCharactName());
            charactionJson.setUrl("/tiku/"+gradeId+"/"+subName+"/point"+pointId+"/t"+t+"d"+
                    d+"c"+list.getCharactId());
            if (list.getCharactId().toString().equals(c)){
                charactionJson.setSelect(true);        //显示当前选择的项
            }
            charactionJsonList.add(charactionJson);
        }
        return charactionJsonList;
    }
}
