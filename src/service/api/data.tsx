import axios from 'axios';

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserInfos = async (id: string) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};


/**
 * Get user activity 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserActivity = async (id: string) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user average session 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserAverageSessions = async (id: string) => {
	try {
		const res = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserPerformance = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/user/${id}/performance`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};