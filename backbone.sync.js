var methodMap = {
	'create': 'POST',
	'update': 'PUT',
	'patch':  'PATCH',
	'delete': 'DELETE',
	'read':   'GET'
};

Backbone.sync = function(method, model, options) {
	var type = methodMap[method];
	options || (options = {});

	switch (method) {
		case 'create':
		break;

		case 'update':
		break;

		case 'delete':
		break;

		case 'read':
		break;
	}
};

