const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Tween,
		C3.Behaviors.Flash,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Browser,
		C3.Plugins.AJAX,
		C3.Plugins.Arr,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.LoadURL,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Arr.Exps.Back,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Acts.Shuffle,
		C3.Plugins.Text.Cnds.CompareText,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Arr.Acts.Pop,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.PickAll,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Sprite.Cnds.CompareFrame
	];
};
self.C3_JsPropNameTable = [
	{background: 0},
	{Logo: 0},
	{Tween: 0},
	{spbeyaz: 0},
	{Flash: 0},
	{solTabela: 0},
	{donenyildiz: 0},
	{yildiz: 0},
	{soruzemin: 0},
	{secenek_zemin: 0},
	{btn_tamekran: 0},
	{btn_ses: 0},
	{btn_basla: 0},
	{Touch: 0},
	{Mouse: 0},
	{Keyboard: 0},
	{Browser: 0},
	{AJAX: 0},
	{sorular: 0},
	{sorularSirasi: 0},
	{Skor: 0},
	{baslik: 0},
	{soru: 0},
	{secenekler_text: 0},
	{soru_resimleri: 0},
	{ButonAilesi: 0},
	{skor: 0}
];

self.InstanceType = {
	background: class extends self.ISpriteInstance {},
	Logo: class extends self.ISpriteInstance {},
	spbeyaz: class extends self.ISpriteInstance {},
	solTabela: class extends self.ISpriteInstance {},
	donenyildiz: class extends self.ISpriteInstance {},
	yildiz: class extends self.ISpriteInstance {},
	soruzemin: class extends self.ISpriteInstance {},
	secenek_zemin: class extends self.ISpriteInstance {},
	btn_tamekran: class extends self.ISpriteInstance {},
	btn_ses: class extends self.ISpriteInstance {},
	btn_basla: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	sorular: class extends self.IArrayInstance {},
	sorularSirasi: class extends self.IArrayInstance {},
	Skor: class extends self.ITextInstance {},
	baslik: class extends self.ITextInstance {},
	soru: class extends self.ITextInstance {},
	secenekler_text: class extends self.ITextInstance {},
	soru_resimleri: class extends self.ISpriteInstance {},
	ButonAilesi: class extends self.ISpriteInstance {}
}