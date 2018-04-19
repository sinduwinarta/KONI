<div class="panel panel-default">
	<div class="panel-heading no-bg panel-settings">
		<h3 class="panel-title">
			{{ trans('common.page_settings') }}
		</h3>
	</div>
	<div class="panel-body">
		@include('flash::message')

		<form method="POST" action="{{ url('admin/page-settings') }}">

			{{ csrf_field() }}
			<div class="privacy-question">

				<ul class="list-group">
					<li href="#" class="list-group-item">
						<fieldset class="form-group">
							{{ Form::label('page_member_privacy', trans('admin.page_member_privacy')) }}
							{{ Form::select('page_member_privacy', array('members' => trans('common.members'), 'only_admins' => trans('admin.only_admins')), Setting::get('page_member_privacy', 'only_admins'), ['class' => 'form-control', 'placeholder' => trans('admin.please_select')]) }}
						</fieldset>						
					</li>

					<li href="#" class="list-group-item">
						<fieldset class="form-group">
							{{ Form::label('page_timeline_post_privacy', trans('admin.page_timeline_post_privacy')) }}
							{{ Form::select('page_timeline_post_privacy', array('everyone' => trans('common.everyone'), 'only_admins' => trans('admin.only_admins')) , Setting::get('page_timeline_post_privacy', 'everyone') , ['class' => 'form-control', 'placeholder' => trans('admin.please_select')]) }}
						</fieldset>
					</li>
				</ul>
				<div class="pull-right">
					{{ Form::submit(trans('common.save_changes'), ['class' => 'btn btn-success']) }}
				</div>
			</div>
		{{ Form::close() }}
		
	</div>
</div><!-- /panel -->