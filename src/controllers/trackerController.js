import { Tracker } from '../models';
import Sequelize, { Op } from 'sequelize';

//Контроллер для получения координат пользователя
const getTracks = async (req, res) => {
  try {
    //Принимает 3 параметра - время(от и/или до) и id пользователя
    const { from, to, userId } = req.body;
    let trackerFilterData = {};
    //Если в запросе пришли обе даты то создаем в объектк фильтрации прмежуток от и до
    if (from && to) {
      trackerFilterData['created_at'] = {
        [Op.gte]: new Date(from),
        [Op.lte]: new Date(to)
      };
    //Если пришло только от до выбераем все координаты после этой даты
    } else if (from) {
      trackerFilterData['created_at'] = {
        [Op.gte]: new Date(from)
      };
    //Если пришло только до до выбераем все координаты до этой даты
    } else if (to) {
      trackerFilterData['created_at'] = {
        [Op.lte]: new Date(to)
      };
    }
    //Добовляем в фильтр id пользователя
    trackerFilterData['userId'] = userId;
    let data = await Tracker.findAll({
      where: trackerFilterData,
      attributes: { exclude: ['id'] }
    });
    return res.status(200).json({
      data
    });
  } catch (e) {
    return res.status(500).json({
      error: 'Server error',
      message: e
    });
  }
};

//Контроллер для добавления нового местоположения
const createTrack = async (req, res) => {
  try {
    //Принимает 3 параметра - широта, долгота и id пользователя
    const { userId, lat, lon } = req.body;
    const data = await Tracker.create({ userId, lat, lon });
    return res.status(200).json({
      data
    });
  } catch (e) {
    return res.status(500).json({
      error: 'Server error',
      message: e
    });
  }
};

export { getTracks, createTrack };
