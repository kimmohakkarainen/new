export default function rapsaState(
		state = {
				error: null,
				whoami: {},
				dayview: {
					today: null,
					projects: []
				},
				weekview: {},
				monthview: {},
				customerview: [],
				projectview: {},
				reportview: {},
				graphview: {},
				passwordview: {},
				projectprefview: [],
				flexprojects: {
					unclassified: [],
					all: [],
					classificationOptions: []
				},
				personadmin: [],
				flexpersons: [],
				personFlexSummary: {}
		},
		action
) {
	const newstate = Object.assign({}, state, action.payload);
	return newstate;
}
