
var asks = []
	, choices = []
	, yn = []
	, result = {}

/**
 * Expose version
 */

exports.version = '0.0.1'

/**
 * Simple prompt helper.
 */

function prompt(msg, cb) {
	process.stdout.write(msg)
	process.stdin.setEncoding('utf8')
	process.stdin.once('data', cb).resume()
}

/**
 * Ask a simple open question.
 */

exports.ask = function (data) {
	if ('string' === typeof data)
		asks.push(data)
	else if (data.length)
		asks = asks.concat(data)
	return this
}

/**
 * Ask a yes/no question.
 */

exports.yn = function (data) {
	yn.push(data)
	return this	
}

/**
 * Select responses from a specific choice.
 */

exports.choices = function (title, data) {
	choices.push({title: title, arr: data})
	return this
}

/**
 * Function to execute to fetch final results.
 */

exports.done = function (cb) {
	// create responses list if necessary
	if (asks.length) result.asks = []
	if (choices.length) result.choices = []
	if (yn.length) result.yn = []

	~function walk() {

		if (asks.length) { // simple questions
			var msg = asks.shift()
			prompt("  \x1b[1m" + msg + "\x1b[m ", function (resp) {
				result.asks.push(resp.trim())
				walk()
			})

		} else if (yn.length) { // yes/no questions
			var msg = yn.shift()
			prompt("  \x1b[1m" + msg + "\x1b[m [Y|n]", function (resp) {
				result.yn.push(resp.trim().toLowerCase() === 'y')
				walk()
			})

		} else if (choices.length) { // choices
			var choice = choices.shift()
				, msg = "  \x1b[1m" + choice.title + "\x1b[m\n"

			choice = choice.arr
			for (var i = 0 ; i < choice.length ; i++)
				msg += "    " + (i + 1) + '. ' + choice[i] + '\n'
			prompt(msg, function (resp) {
				resp = choice[~~(resp - 1)] || choice[0]
				result.choices.push(resp)
				walk()
			})

		} else { // then return all reponses :)
			process.stdin.destroy()
			cb(result)
		}
	}()
}