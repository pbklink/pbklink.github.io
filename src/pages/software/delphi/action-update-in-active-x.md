---
layout: '@layouts/MarkdownPageLayout.astro'
date: 2017-01-29
title: Action Update in ActiveX
---

### Firing Action’s OnUpdate event in ActiveX

Tried to use an Action's OnUpdate event in a Delphi ActiveX (or ActiveForm) component?

You probably found it did not work! This is due to the fact that Delphi fires the OnUpdate event whenever the application Message Queue becomes empty. However an ActiveX component (or ActiveForm application) runs in a DLL - so it normally does not exercise the message queue.

However the code below will work for ActiveX components containing TForms (eg. ActiveForms). In this example, the object field "FMyDllForms" is a list of TForm's currently active in the DLL. With a bit of work, you can probably figure out how to make it work with components in ActiveX controls.

Hook into the Foreground Idle hook when the ActiveX Server initialises

```
Hook := SetWindowsHookEx(WH_FOREGROUNDIDLE,
                          TFNHookProc(@HandleForegroundIdleHook),
                         0,
                         GetCurrentThreadID);
```

Handle Hook call backs - do UpdateActions

```pascal
function HandleForegroundIdleHook(Code: Integer;
                                  wparam: WPARAM;
                                  lparam: LPARAM): LRESULT; stdcall; begin
  if Code = HC_ACTION then
  begin
    for I := 0 to FMyDllForms.Count-1 do
    begin
      FMyDllForms[I].UpdateActions; // ensure this has public visibility
                                    // in descendant form
    end;
  end;

  Result := CallNextHookEx(Hook, Code, wparam, lparam);
end;
```

_Dont forget to 'unhook' when the ActiveX server shuts down_
