---
layout: '@layouts/MarkdownPageLayout.astro'
date: 2017-01-29
title: Improved Radio Group
---

For a project I worked on, I needed a Radio Group component where I can focus one of the Radio Buttons but not select it (ie check it). I could not find one which worked in this fashion so I had to create my own.

The code is below. Its a bit messy and not that well encapsulated but it works.

Custom Component Unit:
```
interface 

type
  TMyRadioGroup = class(TRadioGroup) 
  private
    FSettingFocus: Boolean;
    function GetTopLeftButton: TRadioButton;
    function GetRadioButtonControl(ItemNr: Integer): TRadioButton;
  protected
    function CanModify: Boolean; override;
  public 
    procedure SetFocus; override; 
  end; 

var
  MyComponents_FormActivating: Boolean = False;
  MyComponents_ApplicationMinimised: Boolean = False; 

implementation 

{ TMyRadioGroup }

function TMyRadioGroup.CanModify: Boolean;
begin
  Result := not FSettingFocus 
            and 
            Application.Active 
            and 
            not MyComponents_FormActivating 
            and 
            not MyComponents_ApplicationMinimised;
end;

function TMyRadioGroup.GetRadioButtonControl(ItemNr: Integer): TRadioButton; 
var
  I: Integer;
begin
  Result := nil;
  for I := 0 to ControlCount-1 do
  begin
    if Controls[I] is TRadioButton then
    begin
      if TRadioButton(Controls[I]).Caption = Items[ItemNr] then
      begin 
        Result := TRadioButton(Controls[I]); 
        Break;
      end;
    end;
  end;
end; 

function TMyRadioGroup.GetTopLeftButton: TRadioButton;
var I: Integer;
begin
  Result := nil;
  for I := 0 to ControlCount-1 do
  begin
    if Controls[I] is TRadioButton then
    begin
      if not Assigned(Result) then 
        Result := TRadioButton(Controls[I])
      else
      begin
        if (TRadioButton(Controls[I]).Left < Result.Left)
           or
           (TRadioButton(Controls[I]).Top < Result.Top) then
        begin
          Result := TRadioButton(Controls[I]);
        end;
      end;
    end;
  end;
end;

procedure TMyRadioGroup.SetFocus;
var
  FocusButton: TRadioButton;
begin
  inherited;
  if ItemIndex >= 0 then
    FocusButton := GetRadioButtonControl(ItemIndex)
  else
    FocusButton := GetTopLeftButton;

  if Assigned(FocusButton) then
  begin 
    FSettingFocus := True;
    try
      FocusButton.SetFocus;
    finally
      FSettingFocus := False;
    end;
  end;
end;
```

Form Unit:
```
implementation

procedure TMainForm.WndProc(var Message: TMessage);
begin
  if Message.Msg <> WM_ACTIVATE then 
    inherited
  else
  begin
    MyComponents_FormActivating := True;
    try
      inherited;
    finally
      MyComponents_FormActivating := False;
    end;
  end;
end;

procedure TMainForm.ApplicationEventsMinimize(Sender: TObject);
begin
  MyComponents_ApplicationMinimised := True;
end;

procedure TMainForm.ApplicationEventsRestore(Sender: TObject);
begin
  MyComponents_ApplicationMinimised := False;
end;
```