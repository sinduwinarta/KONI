<div class="right-side-section">

	<div class="panel panel-default">
		<div class="panel-body nopadding">
			<div class="mini-profile socialite">
				<div class="background">
					<div class="widget-bg">
						<img src=" @if(Auth::user()->cover) {{ url('user/cover/'.Auth::user()->cover) }} @else {{ url('user/cover/default-cover-user.png') }} @endif" alt="{{ Auth::user()->name }}" title="{{ Auth::user()->name }}">
					</div>
					<div class="avatar-img">
						<img src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->name }}" title="{{ Auth::user()->name }}">
					</div>
				</div>
				<div class="avatar-profile">
					<div class="avatar-details">
						<h2 class="avatar-name">
							<a href="{{ url(Auth::user()->username) }}">
								{{ Auth::user()->name }}
							</a>
						</h2>
						<h4 class="avatar-mail">
							<a href="{{ url(Auth::user()->username) }}">
								{{ '@'.Auth::user()->username }}
							</a>
						</h4>
					</div>      
				</div>
				<ul class="activity-list list-inline">
					<li>
						<div class="activity-name">
							{{ trans('common.posts') }}
						</div>
						<div class="activity-count">
							{{ Auth::user()->posts->count() }}
						</div>
					</li>
					<li>
						<div class="activity-name">
							{{ trans('common.followers') }} 
						</div>
						<div class="activity-count">
							{{ Auth::user()->followers->count() }}
						</div>
					</li>
					<li>
						<div class="activity-name">
							{{ trans('common.following') }}
						</div>
						<div class="activity-count">
							{{ Auth::user()->following->count() }}
						</div>
					</li>
				</ul>
			</div><!-- /mini-profile -->							
		</div>
	</div><!-- /panel -->
	
	<div class="panel panel-default">
		<div class="panel-heading no-bg">
			<h3 class="panel-title">
				{{ trans('common.suggested_people') }}
			</h3>
		</div>
		<div class="panel-body">
			<!-- widget holder starts here -->
			<div class="user-follow socialite">
				<!-- Each user is represented with media block -->
				@if($suggested_users != "")
					
					@foreach($suggested_users as $suggested_user)
					
					<div class="media">
						<div class="media-left badge-verification">
							<a href="{{ url($suggested_user->username) }}">
								<img src="{{ $suggested_user->avatar }}" class="img-icon" alt="{{ $suggested_user->name }}" title="{{ $suggested_user->name }}">
								@if($suggested_user->verified)
									<span class="verified-badge bg-success verified-medium">
										<i class="fa fa-check"></i>
									</span>
								@endif
							</a>
						</div>
						<div class="media-body socialte-timeline follow-links">
							<h4 class="media-heading">{{ $suggested_user->name }} 
							
							<span class="text-muted">{{ '@'.$suggested_user->username }}</span></h4>
							<div class="btn-follow">
								<a href="#" class="btn btn-default follow-user follow" data-timeline-id="{{ $suggested_user->timeline->id }}"> <i class="fa fa-heart"></i> {{ trans('common.follow') }}</a>
							</div>
							<div class="btn-follow hidden">
								<a href="#" class="btn btn-success follow-user unfollow" data-timeline-id="{{ $suggested_user->timeline->id }}"><i class="fa fa-check"></i> {{ trans('common.following') }}</a>
							</div>
						</div>
					</div>
					@endforeach
				@else
					<div class="alert alert-warning">
					{{ trans('messages.no_suggested_users') }}
					</div>
				@endif

			</div>
			<!-- widget holder ends here -->
		</div>
	</div>

	@if(Setting::get('home_ad') != NULL)
	<div id="link_other" class="post-filters">
		{!! htmlspecialchars_decode(Setting::get('home_ad')) !!}
	</div>
	@endif
</div>