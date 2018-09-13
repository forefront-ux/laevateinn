const SystemSounds = {
	Basso: "Basso",
	Blow: "Blow",
	Bottle: "Bottle",
	Frog: "Frog",
	Funk: "Funk",    // like system sound of failed action
	Glass: "Glass",  // cheers sound for successful action
	Hero: "Hero",
	Morse: "Morse",
	Ping: "Ping",
	Pop: "Pop",
	Purr: "Purr",
	Sosumi: "Sosumi",
	Submarine: "Submarine",
	Tink: "Tink"
  };

const PluginSounds = {
	success: SystemSounds.Glass,
	fail: SystemSounds.Funk
};

/**
 *
 *
 * @export
 * @param {string} [type='fail']
 */
export function alert(type='fail'){
	const soundName = type == 'success' ? PluginSounds[type] : PluginSounds['fail'];
	const sound = NSSound.soundNamed(soundName);
	sound.play();
}