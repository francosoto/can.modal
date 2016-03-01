var	pluginifier
=	require('steal-tools').pluginifier
,	fs
=	require('fs')

pluginifier(
	{
		config:	__dirname+'/demo/stealconfig.js'
	,	main:	'modal'
	}
).then(
	function(pluginify)
	{
		// Get the main module, ignoring a dependency we don't want.
		var menuPlugin
		=	pluginify(
				'modal'
		,	{
				ignoreAllDependencies:		true
			,	minify:						true
			,	removeDevelopmentCode:		true
			,	useNormalizedDependencies:	false
			,	format:						'steal'
			}
		)

		// writes the pluginified module.
		fs.writeFileSync(
			'modal.min.js'
		,	menuPlugin
		,	'utf8'
		)
	}
)
